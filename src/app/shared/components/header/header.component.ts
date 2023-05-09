import { Component } from "@angular/core";
import { AuthService } from "src/app/core/auth/services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  isAuth(): boolean {
    return this.authService.isAuth();
  }

  signOut() {
    this.authService.signOut();
  }
}
