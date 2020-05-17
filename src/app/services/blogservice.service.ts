import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BlogserviceService {
  constructor() {}

  blogs: any[] = [
    {
      id: 1,
      title: "Title 1",
      author: "Mr.abc",
      body: "Some text abc",
    },
    {
      id: 2,
      title: "Title 2",
      author: "Mr.pqr",
      body: "Some text abc",
    },
    {
      id: 3,
      title: "Title 3",
      author: "Mr.kmn",
      body: "Some text abc",
    },
    {
      id: 4,
      title: "Title 4",
      author: "Mr.abc",
      body: "Some text abc",
    },
    {
      id: 5,
      title: "Title 5",
      author: "Mr.abc",
      body: "Some text abc",
    },
  ];

  getBlogs() {
    return this.blogs;
  }
}
