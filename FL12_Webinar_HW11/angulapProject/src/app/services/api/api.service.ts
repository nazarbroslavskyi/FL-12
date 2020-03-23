import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:3000';
  }

  public get(endpoint: string, options = {}): Observable<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}`, options);
  }

  public post(endpoint: string, body): Observable<any> {
    return this.http.post(`${this.apiUrl}/${endpoint}`, body);
  }

  public put(endpoint: string, body): Observable<any> {
    return this.http.put(`${this.apiUrl}/${endpoint}`, body);
  }

  public delete(endpoint: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${endpoint}`);
  }
}
