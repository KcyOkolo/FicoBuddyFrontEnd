import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  AfterViewChecked,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-chatresponsesummary',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="chatsummary">
      <!-- Blue header bar -->
      <div class="chatheader"></div>

      <!-- Summary body: questions + user answers -->
      <div
        class="summary-body"
        #summaryBody
      >
        <h3 class="responses-title">Responses:</h3>

        <!-- Loop over answers; i is index → question[i] -->
        <ng-container *ngFor="let ans of answers; index as i">
          <div class="response-item">
            <strong class="question-text">
              {{ questions[i] }}
            </strong>
            <div class="response-value">
              {{ ans }}
            </div>
          </div>
        </ng-container>

        <!-- “Get Action Plan” button at bottom -->
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
      min-width: 330px;
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

    .responses-title {
      margin: 0 0 12px 0;
      font-size: 18px;
      font-weight: 600;
      font-family: 'Montserrat', sans-serif;
      color: #333;
    }

    .response-item {
      margin-bottom: 16px;
    }

    .question-text {
      display: block;
      font-size: 14px;
      margin-bottom: 4px;
      color: #555;
      line-height: 1.4;
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
export class Chatresponsesummary implements AfterViewChecked {
  /**
   * Parent <app-chatpage> will pass in every user answer 
   * as this `answers` array. 
   */
  @Input() answers: Array<string | number> = [];

  /**
   * Hard‐coded list of questions. The i-th element here
   * appears above the i-th answer in `answers[]`.
   */
  questions: string[] = [
    "What percent of your available credit are you currently using? (e.g., 10%, 30%)",
    "Roughly how many times have you missed a payment in the past?",
    "How many years have you had any form of credit like loans or credit cards?",
    "About how much total money do you currently owe (credit cards, loans, etc)?",
    "How much do you pay monthly on all loans and credit cards combined?",
    "How many times have you applied for credit in the last year?",
    "How many credit cards do you actively use?",
    "How much do you usually owe monthly across all accounts?",
    "What is your total yearly income before taxes?",
    "How much money do you usually save or invest monthly?"
  ];

  @ViewChild('summaryBody', { static: false })
  private summaryBodyRef!: ElementRef<HTMLDivElement>;

  ngAfterViewChecked() {
    // Auto‐scroll to bottom whenever the view has been updated
    if (this.summaryBodyRef) {
      const el = this.summaryBodyRef.nativeElement;
      el.scrollTop = el.scrollHeight;
    }
  }
}
