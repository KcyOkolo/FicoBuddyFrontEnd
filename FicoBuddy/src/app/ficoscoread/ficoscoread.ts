import { Component } from '@angular/core';

@Component({
  selector: 'app-ficoscoread',
  standalone: true,
  template: `
  
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
  
    .fico-wrapper {
  margin-top: 19px;
  position: relative;
  max-width: 262.5px;      
  width: 100%;            
  aspect-ratio: 262.5/375; 
  min-width: 200px;      
}

.fico-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fico-button {
  position: absolute;
  bottom: 18%;
  left: 50%;              
  transform: translateX(-50%);
  background-color: #0A6DE6;
  border: 1px solid #0A6DE6;
  border-radius: 50px;
  width: min(135px, 60%); 
  height: clamp(35px, 11%, 41.25px); 
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 500;
  font-size: clamp(12px, 2.5vw, 14px); /* Responsive font */
  z-index: 10;
}

.fico-button:hover {
  background-color: rgb(7, 89, 190);
  cursor: pointer;
}


@media (max-width: 480px) {
  .fico-wrapper {
    max-width: 200px;
  }
}

@media (min-width: 768px) {
  .fico-wrapper {
    max-width: 300px;
  }
}
  `]
})
export class Ficoscoread {}