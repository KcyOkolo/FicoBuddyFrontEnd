import { Component } from '@angular/core';

@Component({
  selector: 'app-notice',
  imports: [],
  template: `
    <div>
      <h2> FICO BUDDY, </h2>
      <h3>Your AI Credit Strategy Assistant</h3>
      <p> Your financial health is personal - so are our AI-powered tools. 
        Get customized credit score insights and improvement recommendations 
        tailored to your profile, enabling you to:</p>

    <ul>
      <li> Identify key areas for improvement</li>
      <li> Understand what lenders may see </li>
      <li> Take practical steps towards long-term credit health </li>
    </ul>
    
    <p class = "disclosure"> The data is generated based on information you enter
       and is intended for general guidance only. Recommendations may vary depending
        the accuracy of your inputs and should not be considered financial advice. 
        This tool uses AI and may not account for all aspects of your financial situation. 
        For the most accurate and personalized guidance, we recommend consulting a licensed 
        financial advisor. We also encourage you to check your official FICO® Score. </p>
    </div>
  `,
  styles: [`
    div{
      font-family: "Lato", sans-serif;
      max-width: 800px;
      width:90%;
      min-height: 400px;
      height:auto;
      background-color: white;
      border-radius: 20px;
      margin: 0 auto;
      min-width: 400px;       
      width: clamp(320px, 90%, 800px);  

    }

    h2{
      color: black;
      padding: 20px 20px;
      font-weight: 500;
      font-size: 42px;
      background: linear-gradient(to right, #0A6DE6, #9747FF);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
         
     
    }

    h3{
      color: black;
      padding: 10px 20px;
      font-weight: 500;
      font-size: 30px;
      
      margin-top: -70px;
      margin-left: 12px;

    }

    p{
      padding: 0px 30px;
    }

    ul{
      display: flex;
      gap: 20px;
    }

    .disclosure{
      padding: 30px 20px;
      font-size: 10px;
      color: grey;
      margin-top: 40px;

    }

    
    @media (min-width: 768px){
      div{
        width:80%;
      }

      h2{
        padding: 30px;
      }
    }

    @media (min-width:1024px){
      div{
        width:800px;
      }
    }
    
    
    
    `]
})
export class Notice {

}
