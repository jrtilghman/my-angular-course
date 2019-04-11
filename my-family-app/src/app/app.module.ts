import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FamilyComponent } from "./family/family.component";
import { FriendsComponent } from "./friends/friends.component";
import { HobbiesComponent } from "./hobbies/hobbies.component";

@NgModule({
  declarations: [
    AppComponent,
    FamilyComponent,
    FriendsComponent,
    HobbiesComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
