import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import  { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  register(regiserForm: any): Observable<any> {
    return this.http.post(this.apiUrl, regiserForm, {observe: 'response'})
  }

  smsVerification(otpInfo: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/otpVerification`, otpInfo)
  }
  
}
