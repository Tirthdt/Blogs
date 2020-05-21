import { Component, OnInit, OnDestroy } from "@angular/core";
import { BlogserviceService } from "../../../services/blogservice.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-blog-add",
  templateUrl: "./blog-add.component.html",
  styleUrls: ["./blog-add.component.css"],
})
export class BlogAddComponent implements OnInit, OnDestroy {
  Title = "";
  Description = "";
  Content = "";
  blogsObs: Observable<any[]>;
  blogs: any[];
  private sub: any;

  constructor(public blogService: BlogserviceService, public router: Router) {
    this.blogsObs = this.blogService.getBlogs();
    this.sub = this.blogsObs.subscribe((d) => {
      this.blogs = d;
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.blogService.saveBlog(this.Title, this.Description, this.Content);
    this.router.navigate([""]);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
