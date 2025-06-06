import { Component } from '@angular/core';

@Component({
  selector: 'app-recommendationswindow',
  standalone: true,
  template: `
    <div class="window-container">
      <div class="recommendationswindow">
        <!-- intentionally left blank -->
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
    }
  `]
})
export class Recommendationswindow { }
