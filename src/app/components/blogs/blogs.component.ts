import { Component, OnInit } from "@angular/core";
import { BlogserviceService } from "../../services/blogservice.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-blogs",
  templateUrl: "./blogs.component.html",
  styleUrls: ["./blogs.component.css"],
})
export class BlogsComponent implements OnInit {
  blogsObs: Observable<any[]>;
  blogs: any[];

  constructor(public blogService: BlogserviceService) {
    this.blogsObs = this.blogService.getBlogs();
    this.blogsObs.subscribe((d) => {
      this.blogs = d;
    });
  }

  ngOnInit() {}
}
