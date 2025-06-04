
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-credit-info-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- CARD CONTAINER -->
    <div class="card">
      <section class="credit-section">
        <h2>What We Ask For &amp; Why</h2>
        <p>
          To provide you with the most useful and personalized recommendations, we ask for a few key
          pieces of financial information. Each of these factors plays a role in how your credit score
          is calculated and helps us understand your overall financial picture. How is what each input means:
        </p>

        <div class="grid-container">
          <div
            *ngFor="let item of items; let i = index"
            class="circle"
            [ngClass]="{ 'light-circle': i === items.length - 1 }"
          >
            <div class="content">
              <span class="title">{{ item.title }}</span>
              <span class="description">{{ item.description }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    /* -----------------------
       CARD STYLING 
       (white background, rounded corners, drop shadow)
       ----------------------- */
    .card {
      background: white;
      border-radius: 16px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      margin: 32px auto;       /* create space around the card */
      padding: 32px 24px;      /* inner spacing */
      max-width: 900px;        /* so the card never grows too wide */
      margin-bottom: 50px;
    }

    /* -----------------------
       SECTION INSIDE THE CARD
       (adjusted spacing to fit inside .card)
       ----------------------- */
    .credit-section {
      margin: 0;               /* remove external margin, card handles outer spacing */
      padding: 0;              /* remove padding, card handles it */
      text-align: center;
    }
    .credit-section h2 {
      font-family: "Lato", sans-serif;
      font-size: 26px;
      margin: 0 0 12px 0;
      color: #1a1a1a;
      text-align: left;
      font-weight: 700;
    }
    .credit-section p {
      font-family: "Lato", sans-serif;
      font-size: 15px;
      margin-bottom: 0 0 28px 0;
      line-height: 1.5;
      color: #333;
      text-align: left;
      font-weight: 400; 
    }

    /* -----------------------
       GRID OF CIRCLES
       ----------------------- */
    .grid-container {
      display: grid;
      grid-template-columns: repeat(4, minmax(160px, 1fr));
      gap: 20px;
      justify-items: center;
    }
    .circle {
      width: 150px;
      height: 150px;
      border: 2px solid #187bcd;
      border-radius: 50%;
      position: relative;
      overflow: hidden;
      transition: background-color 0.3s ease;
      cursor: default;
      background: transparent;
    }
    .light-circle {
      background-color: #f0f8ff;
    }

    /* -----------------------
       TEXT INSIDE EACH CIRCLE
       ----------------------- */
    .content {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      flex-direction: column;
      padding: 8px;
    }
    .title,
    .description {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      opacity: 1;
      transition: opacity 0.3s ease, color 0.3s ease;
      color: #187bcd;
      font-size: 12px;
      line-height: 1.3;
    }
    .description {
      opacity: 0;
    }

    /* -----------------------
       HOVER EFFECT (blue bg + white text)
       ----------------------- */
    .circle:hover {
      background-color: #187bcd;
    }
    .circle:hover .title,
    .circle:hover .description {
      color: white;
    }
    .circle:hover .title {
      opacity: 0;
    }
    .circle:hover .description {
      opacity: 1;
    }
  `]
})
export class CreditInfoSection {
  items = [
    {
      title: 'Current Credit Score',
      description: 'This is your numeric credit score (e.g. 680). Lenders use it to judge your credit risk.'
    },
    {
      title: 'Annual Income',
      description: 'Your total gross income over one year. Higher income can improve loan approval odds.'
    },
    {
      title: 'Total Debt',
      description: 'Sum of all outstanding debts (loans, credit cards, etc.). Lower debt generally helps you qualify.'
    },
    {
      title: 'Credit Utilization Ratio',
      description: 'Percentage of available credit you’re using. Keeping this under 30% usually helps your score.'
    },
    {
      title: 'Number of Credit Cards',
      description: 'Counts how many open credit accounts you have. Too many new cards can lower your score.'
    },
    {
      title: 'Late Payments',
      description: 'Total number of past‐due payments on file. Payment history heavily influences your score.'
    },
    {
      title: 'Credit Card Inquiries',
      description: 'Inquiries show how many times you’ve applied for new credit. Multiple inquiries can temporarily ding your score.'
    },
    {
      title: 'Average Monthly Bank Balance',
      description: 'Average balance across all your bank accounts per month. Indicates cash reserves and stability.'
    },
    {
      title: 'Monthly Investment Amount',
      description: 'How much you invest each month. Consistent investing can signal financial responsibility.'
    },
    {
      title: 'Age of Oldest Credit Account',
      description: 'Length of time since your oldest open account. Longer histories generally boost your score.'
    },
    {
      title: 'Total Monthly Debt Payments',
      description: 'Sum of monthly obligations (rent, loans, credit card minimums). Lenders check this for your debt‐to‐income ratio.'
    },
    {
      title: 'Want To Learn More?',
      description: 'Hover over any circle to see more details about how that factor affects your credit score.'
    }
  ];
}
