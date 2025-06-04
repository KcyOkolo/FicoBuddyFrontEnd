import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chatresponsesummary',
  standalone: true,
  imports: [CommonModule],  
  template: `
    <div class="chatsummary">
      <!-- Blue header bar -->
      <div class="chatheader"></div>

      <!-- Body: show the two values if they're not null -->
      <div class="summary-body">
        <h3>Responses:</h3>

        <!-- currentCreditScore -->
        <div class="response-item" *ngIf="currentCreditScore !== null">
          <strong>Current Credit Score:</strong>
          <div class="response-value">{{ currentCreditScore }}</div>
        </div>

        <!-- totalDebt -->
        <div class="response-item" *ngIf="totalDebt !== null">
          <strong>Total debt across all accounts ($):</strong>
          <div class="response-value">{{ totalDebt }}</div>
        </div>

        <!-- Get Action Plan button always at bottom -->
        <button class="action-plan-button">
          Get Action Plan
        </button>
      </div>
    </div>
  `,
  styles: [`
    .chatsummary {
      background-color: white;
      max-width: 309px;
      width: 100%;
      min-width: 250px;
      height: 600px;           
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      flex: none;           
    }

    .chatheader {
      display: flex;
      background-color: #00609C;
      min-height: 50px;
      height: clamp(45px, 9vh, 60px);
      border-radius: 20px 20px 0 0;
      align-items: center;
      padding: 0 16px;
    }

    .summary-body {
      flex: 1;
      padding: 16px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
    }

    .summary-body h3 {
      margin: 0 0 12px 0;
      font-size: 18px;
      font-weight: 600;
      font-family: 'Montserrat', sans-serif;
      color: #333;
    }


    .response-item {
      margin-bottom: 16px;
    }
    .response-item strong {
      display: block;
      font-size: 14px;
      margin-bottom: 4px;
      color: #555;
    }
    .response-value {
      font-size: 16px;
      color: #000;
      margin-left: 8px;
    }

    .action-plan-button {
      margin-top: auto;
      background-color: #187bcd;
      color: white;
      border: none;
      border-radius: 25px;
      padding: 12px 24px;
      font-size: 14px;
      cursor: pointer;
      align-self: center;
      transition: background-color 0.2s ease;
    }
    .action-plan-button:hover {
      background-color: #0f539d;
    }

    @media (max-width: 768px) {
      .chatsummary {
        width: 100%;
        min-width: 200px;
        height: auto;
      }
    }
  `]
})
export class Chatresponsesummary {
  @Input() currentCreditScore: number | null = null;
  @Input() totalDebt:        number | null = null;
}
