import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  invalidCredentials = false;
  constructor(private formBuilder: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      publicApyKey: ["", [Validators.required]],
      privateApyKey: ["", [Validators.required]],
    });
  }

  signIn() {
    this.auth.signIn(
      this.signInForm.value.publicApyKey,
      this.signInForm.value.privateApyKey
    );
  }

  get email() {
    return this.signInForm.get("email");
  }

  get password() {
    return this.signInForm.get("password");
  }
}
