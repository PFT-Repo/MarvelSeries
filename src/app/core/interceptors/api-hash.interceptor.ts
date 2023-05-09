import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthService } from "../auth/services/auth.service";

@Injectable()
export class ApiHashInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.authService.isAuth()) {
      request = request.clone({
        setParams: {
          ts: environment.TIME_STAMP,
          apikey: this.authService.getApiKey(),
          hash: this.authService.getHash(),
        },
      });
    }
    return next.handle(request);
  }
}
