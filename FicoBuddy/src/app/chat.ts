import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Chat {
  private apiUrl = "https://known-highly-treefrog.ngrok-free.app"; //put local back end url here


  constructor(private http: HttpClient) { }

  SendMessageToAI(userinput: string | number): Observable<any>{
    return this.http.post(`${this.apiUrl}/api/chat`, {message: userinput});
  }
}
