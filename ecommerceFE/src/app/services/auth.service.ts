import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const BASE_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  signup(userData: any) {
    return this.http.post(`${BASE_URL}sign-up`, userData);
  }
}
