import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = 'https://my-json-server.typicode.com/MessinaMichele/strumenti';

  constructor(private http: HttpClient) {}

  getScores(): Observable<any> {
    return this.http.get(`${this.baseUrl}/spartiti`);
  }

  getInstruments(): Observable<any> {
    return this.http.get(`${this.baseUrl}/strumenti`);
  }
}




