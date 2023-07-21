import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private apiUrl = 'http://localhost:3000/images';
  constructor(private http: HttpClient) {}

  upload(file: any): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${this.apiUrl}/editProfileImg`, formData, { observe: 'response' });
  }

  deleteImg(imgId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteImg/${imgId}`, { observe: 'response' });
  }
}
