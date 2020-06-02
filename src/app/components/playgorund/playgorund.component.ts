import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "app-playground",
  templateUrl: "./playgorund.component.html",
  styleUrls: ["./playgorund.component.css"],
})
export class PlaygorundComponent implements OnInit, OnDestroy {
  constructor(public authService: AuthenticationService) {
    console.log(
      this.authService.user.subscribe((user) => {
        console.log(user.uid);
      })
    );
  }

  ngOnInit() {}

  ngOnDestroy(): void {}
}
