import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigationbar } from './navigationbar/navigationbar';
import { Ficoscoread } from './ficoscoread/ficoscoread';
import { Notice } from './notice/notice';
import { CreditInfoSection } from './credit-info-section/credit-info-section';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navigationbar, Ficoscoread, Notice, CreditInfoSection],
  template: `

  
    <app-navigationbar></app-navigationbar>
    <app-ficoscoread></app-ficoscoread>

    
    <!-- push the card down by one full viewport height -->
    <div style="height: 100vh;"></div>

    <app-credit-info-section></app-credit-info-section>

    <!-- keep 50px of gradient visible underneath -->
    <div style="height: 50px;"></div>

  

    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected title = 'FicoBuddy';
}
