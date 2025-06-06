import { Component, OnInit } from '@angular/core';
import { Chat } from '../chat';
import { CommonModule }        from '@angular/common';

@Component({
  selector: 'app-recommendationswindow',
  imports: [CommonModule],
  template: `
    <div class="window-container">
        <div class="recommendationswindow">
            <div *ngIf="score !== null" class="content">
                <h2>AI Recommendations</h2>
                <div class="score-section">
                    <h3>Score: {{ score }}</h3>
                </div>
                <div class="category-section">
                    <h3>Category: {{ category }}</h3>
                </div>
                <div class="tips-section">
                    <h3>Tips:</h3>
                    <ul>
                        <li *ngFor="let tip of tips">{{ tip }}</li>
                    </ul>
                </div>
            </div>
            <div *ngIf="score === null" class="loading">
                FicoBuddy is preparing your recommendations...
            </div>
        </div>
    </div>
  `,
  styles: [`
    .window-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
    }

    .recommendationswindow {
      flex: 1 1;
      width: 1000px;
      height: 800px;
      background-color: white;
      border-radius: 20px;
      box-shadow: 0 8px 32px rgba(248, 244, 244, 0.12);
      padding: 20px;
      overflow-y: auto;
    }

    .content {
      height: 100%;
    }

    .score-section, .category-section, .tips-section {
      margin-bottom: 20px;
    }

    .loading {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      font-size: 18px;
      color: #666;
    }

    h2 {
      margin-bottom: 20px;
      color: #333;
    }

    h3 {
      margin-bottom: 10px;
      color: #555;
    }

    ul {
      padding-left: 20px;
    }

    li {
      margin-bottom: 5px;
    }
  `]
})
export class Recommendationswindow implements OnInit {
  score: any = null;
  category: any = null;
  tips: any = null;

  constructor(private chatservice: Chat) {}

  ngOnInit(): void {
    this.chatservice.GetAIRecommendations("Get Recommendations").subscribe(recs => {
      this.score = recs.score;
      this.category = recs.category;
      this.tips = recs.tips;
    });
  }
}