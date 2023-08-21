import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}
  
  register(regiserForm: any): Observable<any> {
    return this.http.post(this.apiUrl, regiserForm, { observe: 'response' });
  }

  login(loginForm: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, loginForm, {
      observe: 'response',
    });
  }

  smsVerification(otpInfo: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/otpVerification`, otpInfo, {
      observe: 'response',
    });
  }

  resendOTP(userId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/resendOTP/${userId}`, null, {
      observe: 'response',
    });
  }

  renewAccessToken(): Observable<any> {
    return this.http.get(`${this.apiUrl}/renewAccessToken/`, {
      observe: 'response',
    });
  }

  forgotPassword(phoneNumber: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/forgotPassword/`, phoneNumber, {
      observe: 'response',
    });
  }

  resetPassword(resetPasswordInfo: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/resetPassword/`, resetPasswordInfo, {
      observe: 'response',
    });
  }

  test(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer 1|dXlsqqIvFQEr0OYt0du6ggjQp0QeWkR43MXvZXsB`,
    });
    return this.http.get(`http://127.0.0.1:8000/api/photos-libraries/5`, {
      headers: headers, 
      observe: 'response',
    });
  }
}
