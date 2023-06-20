import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, tap, catchError } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            console.log('event');
            console.log(event);
          }
        },
        (error) => {
          if (error.status == 500){
            this.router.navigate(['/Server-Not-Responding']);
          }
        }
      )
    );
  }
}
