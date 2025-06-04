import { Component } from '@angular/core';

@Component({
  selector: 'app-chatresponsesummary',
  imports: [],
  template: `
    <div class = "chatsummary">

      <div class = "chatheader"> </div>
   
    </div>
  `,
  styles: [`
    .chatsummary {
  background-color: white;
  max-width: 309px;        
  width: 100%;             
  min-width: 250px;       
  min-height: 600px;       
  height: auto;            
  border-radius: 20px;
  flex: 1;                
}

.chatheader {
  display: flex;
  background-color: #00609C;
  min-height: 50px;        
  height: clamp(45px, 9vh, 60px); 
  border-radius: 20px 20px 0 0;
  align-items: center;
}


@media (max-width: 768px) {
  .chatsummary {
    max-width: 100%;       
    min-width: 200px;
  }
}

@media (min-width: 1024px) {
  .chatsummary {
    width: 309px;          
    flex: none;            
  }
}
    
    
    
    
    `]
})
export class Chatresponsesummary {

}
