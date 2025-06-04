import { Component } from '@angular/core';

@Component({
  selector: 'app-navigationbar',
  imports: [],
  template: `
    <nav>
      <div>
        <img 
        src = "myFico.png" 
        class = "myFicologo"
        alt = "myFico logo"
        >
      </div>

       <ul class = "menuoptionsleft">
          <li>   How It Works   </li>
          <li> Pricing </li>
        </ul>


      <ul class = "menuoptionsright">
        <li class = "FicoBuddy"> FicoBuddy </li>
        <li> Loans & Offers </li>
        <li> Education </li>
        <li> Community </li>
        <li> Support </li>
      </ul>

      <button class = "login"> Log In </button>

</nav>
  `,


  styles: [`

  *{
    padding: 0;
    margin: 0;
    font-size: 14px;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  
  }
   

    li{
      box-sizing: content-box;
      padding: 15px 20px;
      display: flex;
      justify-content: center;   
      align-items: center;   
    }

    nav{
      display: flex;
      background-color: #ffffff;
      justify-content: space-between;
      align-items: center;
      color: black;
      width: 100%;
      height: 80px;
      padding: 10px 20px;
      position: fixed;
      top: 0;
      left: 0;
      right:0;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.33);
      z-index: 1000; /* ensure nav sits above the FICO image/button */

    }

    @media (min-width: 768px) {
      nav {
        padding: 10px 50px;
      }
    }

    @media (min-width: 1024px) {
      nav {
        padding: 10px 110px;
      }
    }

  

    .myFicologo{
      width: 170px;
      height:57px;
    }

    .menuoptionsleft{
      list-style: none;
      display: flex;
      gap: 0px;
      flex-shrink: 0;
    }


    .menuoptionsright{
      list-style: none;
      display: flex;
      gap: 0px;
      margin-left: auto;
      flex-shrink: 0;
      
      
    }

    .menuoptionsleft li:hover,
    .login:hover,
    .menuoptionsright li:hover{
      background-color: #EDF8FF;
      cursor: pointer;
    }

    .FicoBuddy{
      border-bottom: 3.5px solid #0A6DE6;
      
    }
    .login{
      border-radius: 20px;
      border: 1px solid #0A6DE6;
      list-style: none;
      width: 80px;
      height: 40px;
      padding: 12px 17px;
      color: #0A6DE6;
      font-weight: 590;
      background-color: white;
    }

    




    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    `]
})
export class Navigationbar {

}
