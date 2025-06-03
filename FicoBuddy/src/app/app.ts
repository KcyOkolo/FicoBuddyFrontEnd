import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigationbar } from './navigationbar/navigationbar';
import { Ficoscoread } from './ficoscoread/ficoscoread';
import { Notice } from './notice/notice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigationbar, Ficoscoread, Notice],
  template: `
    <app-navigationbar></app-navigationbar>
    <app-ficoscoread></app-ficoscoread>
  

    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected title = 'FicoBuddy';
}
