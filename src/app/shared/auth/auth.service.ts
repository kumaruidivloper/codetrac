import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthService {

  private loginUrl = 'http://localhost:4000/api/login';

  constructor(private http: HttpClient) {}

  loginuser(user) {
    console.log(user)
    return this.http.post<any>(this.loginUrl, user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }
  
}
