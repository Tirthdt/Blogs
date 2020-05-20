import { Component, OnInit, OnDestroy } from "@angular/core";
import { Route, ActivatedRoute } from "@angular/router";
import { BlogserviceService } from "../../../services/blogservice.service";
import { ProfileService } from "../../../services/profile.service";

@Component({
  selector: "app-blog-detail",
  templateUrl: "./blog-detail.component.html",
  styleUrls: ["./blog-detail.component.css"],
})
export class BlogDetailComponent implements OnInit, OnDestroy {
  blog: any;
  private sub: any;
  id: number;
  profile: any;
  constructor(
    public blogService: BlogserviceService,
    public profileService: ProfileService,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.id = params["id"];
    });
    this.blog = this.blogService.getBlog(this.id);
    this.profile = this.profileService.getProfile();
  }

  ngOnDestroy() {}
}
