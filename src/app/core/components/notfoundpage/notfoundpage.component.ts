import { Component } from "@angular/core";
import { AnimationOptions, LottieComponent } from "ngx-lottie";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-notfoundpage",
  standalone: true,
  imports: [LottieComponent, MatButtonModule],
  templateUrl: "./notfoundpage.component.html",
  styleUrls: ["./notfoundpage.component.scss"],
})
export class NotfoundpageComponent {
  options: AnimationOptions = {
    path: "/assets/images/6734-404-error-glitch-2.json",
  };
}
