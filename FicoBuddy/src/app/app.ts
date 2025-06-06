import { Component, ViewChild }      from '@angular/core';
import { CommonModule }              from '@angular/common';
import { NgIf }                      from '@angular/common';
import { RouterOutlet }              from '@angular/router';

import { Navigationbar }             from './navigationbar/navigationbar';
import { Ficoscoread }               from './ficoscoread/ficoscoread';
import { Notice }                    from './notice/notice';
import { CreditInfoSection }         from './credit-info-section/credit-info-section';
import { Chatpage }                  from './chatpage/chatpage';
import { Recommendationswindow }     from './recommendationswindow/recommendationswindow';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NgIf,
    RouterOutlet,
    Navigationbar,
    Ficoscoread,
    Notice,
    CreditInfoSection,
    Chatpage,
    Recommendationswindow
  ],
  template: `
    <header>
      <app-navigationbar></app-navigationbar>
    </header>

    <div class="forepage">
      <app-notice id="notice"></app-notice>
      <app-ficoscoread></app-ficoscoread>
    </div>

    <div style="height: 10vh;"></div>

    <main class="chatbox">
      <!-- Listen for (actionPlanRequested) from Chatpage -->
      <app-chatpage
        (actionPlanRequested)="onRequestActionPlan()">
      </app-chatpage>

      <!-- Only show this when requested -->
      <app-recommendationswindow *ngIf="showRecommendations"></app-recommendationswindow>
    </main>

    <div style="height: 10vh;"></div>

    <app-credit-info-section></app-credit-info-section>
    <div style="height: 50px;"></div>
    <router-outlet />
  `,
  styles: [`
    .forepage {
      display: flex;
      margin-top: 130px;
      justify-content: center;
      gap: 50px;
      margin-left: -10px;
    }

    main {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      justify-content: center;
    }

    @media (max-width: 1200px) {
      .parent-flex-container {
        flex-direction: column;
        align-items: center;
      }
    }
  `],
})
export class App {
  showRecommendations = false;

  onRequestActionPlan() {
    this.showRecommendations = true;
  }
}
