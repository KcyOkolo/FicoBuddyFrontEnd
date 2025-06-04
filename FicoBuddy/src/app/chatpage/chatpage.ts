import { Component } from '@angular/core';

@Component({
  selector: 'app-chatpage',
  imports: [],
  template: `
  <div class = "chatpage">

    <div class = "chatheader"> 
      <img 
      class = "ficologo"
      src = "ficowhitelogo.png">

    </div>
   
</div>
  `,
  styles: [`
    
    .chatpage {
    background-color: white;
    max-width: 800px;        
    width: 90%;              
    min-height: 600px;      
    height: auto;            
    border-radius: 20px;
    margin: 0 auto;  
    min-width: 400px;       
    width: clamp(320px, 90%, 800px);        
  }

.chatheader {
  display: flex;
  background-color: #00609C;
  min-height: 50px;      
  height: clamp(45px, 9vh, 60px); 
  border-radius: 20px 20px 0 0;
  align-items: center;
  padding: 0 20px;         
}

.ficologo {
  width: clamp(50px, 8%, 65px);    
  height: clamp(18px, 3%, 23px);          
  margin-right: auto;
}


@media (min-width: 768px) {
  .chatpage {
    width: 80%;
  }
  
  .chatheader {
    padding: 0 33px;
  }
}

@media (min-width: 1024px) {
  .chatpage {
    width: 800px;           
  }
}

    

    
    
    
    
    
    
    
    `]
})
export class Chatpage {

}
