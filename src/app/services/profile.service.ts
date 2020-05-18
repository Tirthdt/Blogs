import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  constructor() {}

  profile = {
    id: 1,
    name: "Mr.abc",
    about:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image:
      "https://stickershop.line-scdn.net/stickershop/v1/product/718/LINEStorePC/main.png;compress=true",
  };

  getProfile() {
    return this.profile;
  }
  updateProfile(name, about) {
    this.profile.name = name;
    this.profile.about = about;
  }
}
