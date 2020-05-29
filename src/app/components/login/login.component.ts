import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  email = "";
  password = "";
  sub: any;

  constructor(public auth: AuthenticationService, public router: Router) {}

  ngOnInit() {}

  onSubmit(f) {
    this.auth.signIn(this.email, this.password).then(() => {
      this.router.navigate([""]);
    });
  }
}
