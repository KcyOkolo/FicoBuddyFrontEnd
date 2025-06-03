import { Component } from '@angular/core';

@Component({
  selector: 'app-notice',
  imports: [],
  template: `
    <div>
      <h2> Fico Buddy </h2>
    </div>
  `,
  styles: [`
    div{
      width: 50%;
      height: 400px;
      background-color: white;
      border-radius: 40px;

    }

    h2{
      color: black;
    }
    
    
    
    `]
})
export class Notice {

}
