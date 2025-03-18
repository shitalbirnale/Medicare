import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('jwtToken');
    if(token)
    {
      const clonedRequest = req.clone({
        setHeaders : {
          Authorization : token
        }
      });
      return next.handle(clonedRequest);
    }
    return next.handle(req);
  }
}
