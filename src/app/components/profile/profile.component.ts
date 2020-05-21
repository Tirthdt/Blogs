import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../../services/profile.service";
import { BlogserviceService } from "../../services/blogservice.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  blogsObs: Observable<any[]>;
  blogs: any[];
  profile: any;
  constructor(
    public profileService: ProfileService,
    public blogService: BlogserviceService
  ) {
    this.profile = this.profileService.getProfile();

    this.blogsObs = this.blogService.getBlogs();
    this.blogsObs.subscribe((d) => {
      this.blogs = d;
    });
  }

  ngOnInit() {}
}
