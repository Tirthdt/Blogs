import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";
import { Title } from "@angular/platform-browser";

@Injectable({
  providedIn: "root",
})
export class BlogserviceService {
  items: Observable<any[]>;
  private sub: any;
  blogs: any[];
  constructor(public db: AngularFireDatabase) {
    this.items = db.list("blogs").valueChanges();
    this.sub = this.items.subscribe((data) => {
      this.blogs = data;
    });
  }

  getBlogs() {
    return this.db.list("blogs").valueChanges();
  }

  saveBlog(title, description, content) {
    this.db
      .list("blogs")
      .push({ title: title, description: description, content: content });
  }

  getBlog(id) {
    return this.blogs[id - 1];
  }
}
