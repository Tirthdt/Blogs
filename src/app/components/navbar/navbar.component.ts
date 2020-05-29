import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit, OnDestroy {
  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit() {}

  ngOnDestroy(): void {}

  logout() {
    this.authService.signOut().then(() => {
      this.router.navigate(["login"]);
    });
  }
}
