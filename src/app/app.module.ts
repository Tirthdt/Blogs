import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BlogsComponent } from "./components/blogs/blogs.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { EditProfileComponent } from "./components/profile/edit-profile/edit-profile.component";

import { BlogserviceService } from "./services/blogservice.service";
import { ProfileService } from "./services/profile.service";
import { BlogDetailComponent } from "./components/blogs/blog-detail/blog-detail.component";

const routes: Routes = [
  { path: "", component: BlogsComponent },
  { path: "profile", component: ProfileComponent },
  { path: "profile/editProfile/:id", component: EditProfileComponent },
  { path: "blogDetail/:id", component: BlogDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogsComponent,
    ProfileComponent,
    EditProfileComponent,
    BlogDetailComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [BlogserviceService, ProfileService],
  bootstrap: [AppComponent],
})
export class AppModule {}
