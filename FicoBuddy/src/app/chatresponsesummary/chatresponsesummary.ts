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

      <!-- scrollable body -->
      <div #summaryBody class="summary-body">
        <h3 class="responses-title">Responses:</h3>

        <!-- Loop over answers; show questions[i] beside answers[i] -->
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

        <button 
          *ngIf="showRecommendations" 
          class="action-plan-button">
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
  /** Both arrays come from <app-chatpage> */
  @Input() questions: string[]               = [];
  @Input() answers:   (string | number)[]    = [];
  @Input() showRecommendations: boolean = false;

  @ViewChild('summaryBody', { static: false })
  private summaryBodyRef!: ElementRef<HTMLDivElement>;

  /* auto-scroll the summary list whenever it updates */
  ngAfterViewChecked(): void {
    if (this.summaryBodyRef) {
      const el = this.summaryBodyRef.nativeElement;
      el.scrollTop = el.scrollHeight;
    }
  }
}
