import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable, catchError, retry, throwError, timer } from "rxjs";

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry({ count: 3, delay: () => timer(3000) }),
      catchError((error) => {
        let errorMsg = "";
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Error: ${error.error.message}`;
        } else {
          errorMsg = `Error Code: ${error.status},  Message: ${error.error.message}`;
        }
        alert(errorMsg);
        return throwError(() => errorMsg);
      })
    );
  }
}
