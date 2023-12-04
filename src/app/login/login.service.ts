import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {LoginResponse} from "./LoginResponse";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = '/api/v1/login'; // Update with your actual API endpoint

  constructor(private http: HttpClient) {}

  login(userId: number, username: string): Observable<LoginResponse> {
    let user = {userId: userId, username: username}
    return this.http.post<LoginResponse>(this.apiUrl, user);
  }
}
