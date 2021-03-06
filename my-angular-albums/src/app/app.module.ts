import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AlbumListComponent } from "./albums/album-list/album-list.component";
import { AlbumCardComponent } from "./albums/album-card/album-card.component";
import { ReverseStrPipe } from "./reverse-str.pipe";
import { HttpClientModule } from "@angular/common/http";
import { AboutComponent } from "./about/about.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { AlbumDetailsComponent } from "./albums/album-details/album-details.component";

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    AlbumCardComponent,
    ReverseStrPipe,
    AboutComponent,
    NavbarComponent,
    NotfoundComponent,
    AlbumDetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    /* specifiy services used unless you use @Injectable('providedIn: 'root') in the actual service class*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
