import { Injectable } from "@angular/core";
import { AuthService } from "../auth/services/auth.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class LoginGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuth()) {
      this.router.navigate(["/private"]);
      return false;
    }
    return true;
  }
}
