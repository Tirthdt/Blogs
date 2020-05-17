import { Component, OnInit } from "@angular/core";
import { BlogserviceService } from "../../services/blogservice.service";

@Component({
  selector: "app-blogs",
  templateUrl: "./blogs.component.html",
  styleUrls: ["./blogs.component.css"],
})
export class BlogsComponent implements OnInit {
  blogs: any[];
  constructor(public blogService: BlogserviceService) {
    this.blogs = this.blogService.getBlogs();
    console.log(this.blogs);
  }

  ngOnInit() {}
}
