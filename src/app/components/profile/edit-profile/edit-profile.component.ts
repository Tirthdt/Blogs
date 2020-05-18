import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProfileService } from "../../../services/profile.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.css"],
})
export class EditProfileComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;
  profile: any;
  constructor(
    private route: ActivatedRoute,
    public profileService: ProfileService,
    public router: Router
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params["id"];
    });
    this.profile = this.profileService.getProfile();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  onSubmit(f) {
    var name = f.form.value.name;
    var about = f.form.value.about;
    this.profileService.updateProfile(name, about);
    this.router.navigate(["profile"]);
  }
}
