import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BlogsComponent } from "./components/blogs/blogs.component";
import { ProfileComponent } from "./components/profile/profile.component";

import { BlogserviceService } from "./services/blogservice.service";

const routes: Routes = [
  { path: "", component: BlogsComponent },
  { path: "profile", component: ProfileComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogsComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [BlogserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
