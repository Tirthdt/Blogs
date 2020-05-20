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
      authorId: 1,
      body: "Some text abc",
    },
    {
      id: 2,
      title: "Title 2",
      authorId: 2,
      body: "Some text abc",
    },
    {
      id: 3,
      title: "Title 3",
      authorId: 3,
      body: "Some text abc",
    },
    {
      id: 4,
      title: "Title 4",
      authorId: 1,
      body: "Some text abc",
    },
    {
      id: 5,
      title: "Title 5",
      authorId: 1,
      body: "Some text abc",
    },
  ];

  getBlogs() {
    return this.blogs;
  }

  getBlog(id) {
    return this.blogs[id];
  }
}
