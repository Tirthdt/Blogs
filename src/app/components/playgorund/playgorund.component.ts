import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProfileService } from "../../services/profile.service";
import { Router } from "@angular/router";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";

@Component({
  selector: "app-playground",
  templateUrl: "./playgorund.component.html",
  styleUrls: ["./playgorund.component.css"],
})
export class PlaygorundComponent implements OnInit, OnDestroy {
  Title = "";
  Description = "";
  Content = "";
  blogsObs: Observable<any[]>;
  blogs: any[];
  private sub: any;

  constructor(
    public blogService: ProfileService,
    public router: Router,
    public db: AngularFireDatabase
  ) {
    this.blogsObs = this.db.list("blogs").valueChanges();
    this.sub = this.blogsObs.subscribe((d) => {
      this.blogs = d;
      console.log(this.blogs);
    });
  }

  ngOnInit() {
    console.log(this.blogs);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
