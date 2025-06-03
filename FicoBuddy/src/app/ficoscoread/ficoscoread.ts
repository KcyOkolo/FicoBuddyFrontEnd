import { Component } from '@angular/core';

@Component({
  selector: 'app-ficoscoread',
  standalone: true,
  template: `
    <!-- Relative wrapper so the button can be positioned over the image -->
    <div class="fico-wrapper">
      <img
        src="FicoScore.png"
        alt="Get your FICO® Score for free"
        class="fico-image"
      />
      <button class="fico-button">Get Access Now</button>
    </div>
  `,
  styles: [`
    /* Make the wrapper “position: relative” so children can be positioned on top of each other */
    .fico-wrapper {
      position: relative;
      top: 150px;
      width: 350px;   /* match the image’s width */
      height: 500px;  /* match the image’s height */
      margin-left: auto;   /* center horizontally if needed */
      margin-right: 20px;  /* or whatever right margin you prefer */
      /* remove any top/left/right margins here if you want the wrapper to flow naturally */
    }

    /* The image itself */
    .fico-image {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover; /* ensures it fills the wrapper */
    }

    /* The button, absolutely positioned over the bottom portion of the image */
    .fico-button {
      position: absolute;
      bottom: 18%;
      left: 52%;
      transform: translateX(-50%);
      background-color: #0A6DE6;
      border: 1px solid #0A6DE6;
      border-radius: 25px;
      width: 180px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-weight: 600;
      z-index: 10;  /* ensure it sits on top of the image */
    }

    .fico-button:hover {
      background-color: rgb(7, 89, 190);
      cursor: pointer;
    }
  `]
})
export class Ficoscoread {}