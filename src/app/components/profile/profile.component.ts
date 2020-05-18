import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../../services/profile.service";
import { BlogserviceService } from "../../services/blogservice.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  blogs: any[] = [];
  profile: any;
  constructor(
    public profileService: ProfileService,
    public blogService: BlogserviceService
  ) {
    this.profile = this.profileService.getProfile();
    console.log(this.profile);
    this.blogs = this.blogService.getBlogs().filter((blog) => {
      return blog.authorId == this.profile.id;
    });
    console.log(this.blogs);
  }

  ngOnInit() {}
}
