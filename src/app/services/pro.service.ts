import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProService {
  private apiUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  getProAllInfo(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/proInfo/${userId}`, { observe: 'response' });
  }
}
