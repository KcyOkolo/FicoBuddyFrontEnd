import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Allow message.text to be string or number
interface ChatMessage {
  text: string | number;
  sender: 'bot' | 'user';
}

@Component({
  selector: 'app-chatpage',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class = "chatpage">

      <!-- Chat Header -->
      <div class = "chatheader">
        <img
          class = "ficologo"
          src = "ficowhitelogo.png"
          alt="FICO Logo"
        />
      </div>

      <!-- Chat Body: loop through all messages -->
      <div class="chatbody">
        <div
          *ngFor="let msg of messages"
          [ngClass]="{
            'bot-message': msg.sender === 'bot',
            'user-message': msg.sender === 'user'
          }"
        >
          {{ msg.text }}
        </div>
      </div>

      <!-- Chat Footer: input + send button -->
      <div class="chatfooter">
        <input
          #msgInput
          type="text"
          class="chat-input"
          placeholder="Start typing…"
          (keydown.enter)="handleSend(msgInput.value); msgInput.value=''"
        />
        <button
          class="send-button"
          (click)="handleSend(msgInput.value); msgInput.value=''"
        >
          ▲
        </button>
      </div>

    </div>
  `,
  styles: [`
    .chatpage {
      display: flex;
      flex-direction: column;
      background-color: white;
      max-width: 800px;
      min-width: 400px;
      width: clamp(320px, 90%, 800px);
      min-height: 600px;
      height: 600px;
      border-radius: 20px;
      margin: 0 auto;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }

    .chatheader {
      display: flex;
      align-items: center;
      background-color: #00609C;
      min-height: 50px;
      height: clamp(45px, 9vh, 60px);
      border-radius: 20px 20px 0 0;
      padding: 0 20px;
    }

    .ficologo {
      width: clamp(50px, 8%, 65px);
      height: clamp(18px, 3%, 23px);
      margin-right: auto;
    }

    .chatbody {
      flex: 1;
      padding: 16px;
      overflow-y: auto;
      background-color: #f5f5f5;
      display: flex;
      flex-direction: column;
    }

    .bot-message {
      display: table;
      margin: 6px 0 6px 0;
      background-color: #e0e0e0;
      border: 1px solid #187bcd;
      color: #000;
      padding: 8px 12px;
      border-radius: 12px;
      max-width: 70%;
      word-break: break-word;
    }

    .user-message {
      display: table;
      margin: 6px 0 6px auto;    
      background-color: #187bcd;
      color: white;
      padding: 8px 12px;
      border-radius: 12px;
      max-width: 70%;
      word-break: break-word;
    }

    .chatfooter {
    position: relative;        
    display: flex;
    align-items: center;
    padding: 8px 12px;
    border-top: 1px solid #e0e0e0;
    background-color: #ffffff;
    }


  .chat-input {
    flex: 1;
    height: 40px;
    padding: 0 12px;
    padding-right: 60px;      
    border: 1px solid #187bcd;
    border-radius: 15px;      
    font-size: 14px;
    outline: none;
    }

  .chat-input::placeholder {
      color: #999;
    }

  .send-button {
    position: absolute;       /* remove from normal flow, so it sits on top of the input’s right side */
    right: 18px;              /* adjust to line up over the inner edge of the input’s border */
    top: 50%;
    transform: translateY(-50%);
    width: 28px;
    height: 28px;
    background-color: #187bcd;
    border: none;
    border-radius: 50%;
    color: white;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.2s ease;
    }
    .send-button:hover {
      background-color: #0f539d;
    }

    @media (min-width: 768px) {
      .chatpage {
        width: 80%;
      }
      .chatheader {
        padding: 0 33px;
      }
    }
    @media (min-width: 1024px) {
      .chatpage {
        width: 800px;
      }
    }
  `]
})
export class Chatpage {
  // Now each message.text can be a string or a number
  messages: ChatMessage[] = [];

  /** Called whenever the user presses Enter or clicks the ▲ button */
  handleSend(raw: string) {
    const trimmed = raw.trim();
    if (!trimmed) return;

    // 1) If the trimmed value is a valid integer, convert it:
    const parsedNumber = Number(trimmed);
    const finalText: string | number = 
      !isNaN(parsedNumber) && Number.isInteger(parsedNumber)
        ? parsedNumber
        : trimmed;

    // 2) Add the user's message (string or integer)
    this.messages.push({ text: finalText, sender: 'user' });

    // 3) Immediately add the static bot response
    this.messages.push({ text: 'Fico Buddy is coming soon…', sender: 'bot' });
  }
}
