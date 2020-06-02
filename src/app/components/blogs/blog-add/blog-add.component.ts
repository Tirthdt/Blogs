import { Component, OnInit, OnDestroy } from "@angular/core";
import { BlogserviceService } from "../../../services/blogservice.service";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../../services/authentication.service";

@Component({
  selector: "app-blog-add",
  templateUrl: "./blog-add.component.html",
  styleUrls: ["./blog-add.component.css"],
})
export class BlogAddComponent implements OnInit, OnDestroy {
  Title = "";
  Description = "";
  Content = "";
  uid = "";

  constructor(
    public blogService: BlogserviceService,
    public router: Router,
    public authService: AuthenticationService
  ) {
    this.authService.user.subscribe((userInfo) => {
      this.uid = userInfo.uid;
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.blogService.saveBlog(
      this.Title,
      this.Description,
      this.Content,
      this.uid
    );
    this.router.navigate([""]);
  }
  ngOnDestroy(): void {}
}
