import { Component } from '@angular/core';

@Component({
  selector: 'app-ficoscoread',
  imports: [],
  template: `

      <img
      src= "FicoScore.png"
      alt = "Get your fico score for free, 90% of top lenders use FICO scores"
      class = "FicoScore"
      >

      <button 
      class = "accessbutton">Get Access Now</button>
      

  `,
  styles: [`
  *{
    
  }
    .FicoScore{
      top: 120px;
      margin-left: 75%;
      width: 240px;
      height: 330px;
      display: flex;
      position: sticky;
      z-index: 1;
    }

    .accessbutton{
      background-color: #0A6DE6;
      border: 1px solid #0A6DE6;
      border-radius: 25px;
      list-style: none;
      width: 150px;
      height: 45px;
      display: flex;
      justify-content: center; 
      align-items: center;
      color: white;
      font-weight: 590;
      margin-top: 25px;
      margin-left: 78.25%;
      position: sticky;
      z-index: 10;

    }

    .accessbutton:hover{
      background-color:rgb(7, 89, 190);
      cursor: pointer;
    }
    
    
    `]
})
export class Ficoscoread {

}
