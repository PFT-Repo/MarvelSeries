import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Md5 } from "ts-md5";
import { ComicsService } from "../../api/implementations/comics.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private comicService: ComicsService, private router: Router) {}

  signIn(publicApyKey: string, privateApyKey: string) {
    const hash = Md5.hashAsciiStr(
      `${environment.TIME_STAMP}${privateApyKey}${publicApyKey}`
    );
    localStorage.setItem("hash", hash);
    localStorage.setItem("apiKey", publicApyKey);

    this.comicService.getAll().subscribe({
      next: () => {
        this.router.navigate(["/private/series"]);
      },
      error: () => {
        localStorage.removeItem("hash");
        localStorage.removeItem("apiKey");
      },
    });
  }

  isAuth(): boolean {
    return !!localStorage.getItem("hash") && !!localStorage.getItem("apiKey");
  }

  signOut(): void {
    localStorage.removeItem("hash");
    localStorage.removeItem("apiKey");
    this.router.navigate(["/login"]);
  }

  getHash(): string {
    return localStorage.getItem("hash") ?? "";
  }

  getApiKey(): string {
    return localStorage.getItem("apiKey") ?? "";
  }
}
