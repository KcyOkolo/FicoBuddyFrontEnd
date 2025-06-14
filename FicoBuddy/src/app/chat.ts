import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Chat {
  private apiUrl = "https://known-highly-treefrog.ngrok-free.app";


  constructor(private http: HttpClient) { }

  SendMessageToAI(userinput: string | number): Observable<any>{
    return this.http.post(`${this.apiUrl}/api/chat`, {message: userinput});
  }

  InitialAI(): Observable<any> {
  return this.http.get(`${this.apiUrl}/api/chat`, {
    headers: {
      'ngrok-skip-browser-warning': 'true'
    }
  });
}


  GetAIRecommendations(userinput: string): Observable<any>{
    return this.http.post(`${this.apiUrl}/api/score`, {recommendation: userinput});
  }
}
