

import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CommonModule }           from '@angular/common';
import { Chatresponsesummary }    from '../chatresponsesummary/chatresponsesummary';
import { Chat } from '../chat';



interface ChatMessage {
  text: any;
  sender: 'bot' | 'user';
}

@Component({
  selector: 'app-chatpage',
  standalone: true,
  imports: [ CommonModule, Chatresponsesummary ],
  template: `
    <!-- Outer flex container: LEFT = Chatbox, RIGHT = Responses -->
    <div class="page-wrapper">

      <!-- LEFT COLUMN: Chatbox -->
      <div class="chat-container">
        <!-- Chat Header -->
        <div class="chatheader">
          <img
            class="ficologo"
            src="ficowhitelogo.png"
            alt="FICO Logo"
          />
        </div>

        <!-- Chat Body: loop through all messages -->
        <div class="chatbody" #chatBody>
          <ng-container *ngFor="let msg of messages">
            <!-- BOT MESSAGE ROW -->
            <div *ngIf="msg.sender === 'bot'" class="bot-row">
              <img
                class="bot-avatar"
                src="/FICO_Circle_RGB_Blue.png"
                alt="Bot Avatar"
              />
              <div class="bot-message">
                {{ msg.text }}
              </div>
            </div>

            <!-- USER MESSAGE ROW -->
            <div *ngIf="msg.sender === 'user'" class="user-message">
              {{ msg.text }}
            </div>
          </ng-container>
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

      <!-- RIGHT COLUMN: Responses -->
      <app-chatresponsesummary
        [answers]="answers"
      ></app-chatresponsesummary>

    </div>
  `,
  styles: [`
    /* --------------------------------
       PAGE-WRAPPER: two columns
       -------------------------------- */
    .page-wrapper {
      display: flex;
      gap: 24px;          
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px;
    }

    /* -----------------------
        CHAT BOX (left)
       ----------------------- */
    .chat-container {
      flex: none;          
      width: 800px;         
      display: flex;
      flex-direction: column;
      background-color: white;
      height: 600px;        
      border-radius: 20px;
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
      height: auto;
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

    .bot-row {
      display: flex;
      align-items: flex-start;
      margin: 6px 0;
    }
    .bot-avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-right: 8px;
      object-fit: cover;
      margin-top: 4px;
    }
    .bot-message {
      display: table;
      background-color: #ffffff;
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
      position: absolute;
      right: 18px;
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

    /* -----------------------
       stack vertically on small screens
       ----------------------- */
    @media (max-width: 1100px) {
      .page-wrapper {
        flex-direction: column;
        align-items: center;
      }
      .chat-container {
        width: 90%;
      }
     
    }
  `]
})
export class Chatpage implements OnInit {
  messages: ChatMessage[] = [];
  answers: Array<string | number> = [];


  constructor(private chatservice: Chat) {}


  @ViewChild('chatBody', { static: false })
  private chatBodyRef!: ElementRef<HTMLDivElement>;


  ngOnInit() {
    this.chatservice.SendMessageToAI("__start__").subscribe(response => {
      this.messages.push({ text: response.response, sender: 'bot' });
  
  
      // Auto scroll after first bot message
      setTimeout(() => this.scrollToBottom(), 0);
    });
  }



  handleSend(raw: string) {
    const trimmed = raw.trim();
    if (!trimmed) return;


    const userMessage = trimmed.toLowerCase() === 'hello' ? '__start__' : trimmed;


    this.messages.push({ text: trimmed, sender: 'user' });


    this.chatservice.SendMessageToAI(userMessage).subscribe(response => {
      this.messages.push({ text: response.response, sender: 'bot' });

    if (response.field && response.answer) {
      this.answers.push(`${response.field}: ${response.answer}`);
    }



      setTimeout(() => this.scrollToBottom(), 0);
    });
  }


  private scrollToBottom(): void {
    const el = this.chatBodyRef.nativeElement;
    el.scrollTop = el.scrollHeight;
  }
}

