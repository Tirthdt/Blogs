import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BlogsComponent } from "./components/blogs/blogs.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { EditProfileComponent } from "./components/profile/edit-profile/edit-profile.component";

import { BlogserviceService } from "./services/blogservice.service";
import { ProfileService } from "./services/profile.service";
import { BlogDetailComponent } from "./components/blogs/blog-detail/blog-detail.component";
import { BlogAddComponent } from "./components/blogs/blog-add/blog-add.component";

const routes: Routes = [
  { path: "", component: BlogsComponent },
  { path: "profile", component: ProfileComponent },
  { path: "profile/editProfile/:id", component: EditProfileComponent },
  { path: "blogDetail/:id", component: BlogDetailComponent },
  { path: "blogAdd", component: BlogAddComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogsComponent,
    ProfileComponent,
    EditProfileComponent,
    BlogDetailComponent,
    BlogAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [BlogserviceService, ProfileService],
  bootstrap: [AppComponent],
})
export class AppModule {}
