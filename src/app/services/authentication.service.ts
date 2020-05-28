import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  user: any;
  constructor(public auth: AngularFireAuth, public router: Router) {}

  login(email, password) {
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        console.log(data.user.uid);
        localStorage.setItem("userId", data.user.uid);
        this.router.navigate([""]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getUser() {
    return this.user;
  }

  logout() {
    this.auth
      .signOut()
      .then((data) => {
        this.user = "";
      })
      .catch((err) => console.log(err));
  }
}
