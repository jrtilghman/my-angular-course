import { Component, OnInit } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";
import { Album } from "./albums/album.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title: any;

  ngOnInit(): void {
    this.title = `Billboard Hot `;
  }
}
