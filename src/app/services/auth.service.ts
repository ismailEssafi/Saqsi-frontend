import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import  { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  register(regiserFotm: any): Observable<any> {
    return this.http.post(this.apiUrl, regiserFotm)
  }
  
}
