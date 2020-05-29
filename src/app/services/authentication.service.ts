import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";

import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  user: Observable<any>;
  constructor(public auth: AngularFireAuth) {
    this.user = this.auth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.auth.user;
        } else {
          return of(null);
        }
      })
    );
  }
  async signIn(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.auth.signOut();
  }
}
