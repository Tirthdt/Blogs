import { Component, OnInit, OnDestroy } from "@angular/core";
// import { AuthenticationService } from "../../services/authentication.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit, OnDestroy {
  user: any;
  sub: any;
  constructor() {
    this.user = localStorage.getItem("userId");
  }

  ngOnInit() {}

  ngOnDestroy(): void {}

  logout() {}
}
