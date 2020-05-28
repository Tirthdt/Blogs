import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  email = "";
  password = "";
  sub: any;

  constructor(public auth: AuthenticationService) {}

  ngOnInit() {}

  onSubmit(f) {
    this.auth.login(this.email, this.password);
  }
}
