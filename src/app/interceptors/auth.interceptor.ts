import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let newRequest = request.clone({
      withCredentials: true,
    });
    return next.handle(newRequest).pipe(
      tap(
        (event) => {},
        (error) => {
          if (error.status == 403) {
            this.authService.renewAccessToken().subscribe(
              (response) => {},
              (err: HttpErrorResponse) => {
                if (err.status == 401) {
                  console.log('401');
                  this.router.navigate(['/login']);
                }
              }
            );
          }
        }
      )
    );
  }
}
