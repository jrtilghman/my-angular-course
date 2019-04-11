import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Album } from "../album.model";
import { ALBUMS } from "../albums.data";

@Component({
  selector: "app-album-list",
  templateUrl: "./album-list.component.html",
  styleUrls: ["./album-list.component.css"]
})
export class AlbumListComponent implements OnInit {
  albumsArray: Album[];
  title: any;
  titleCounter = 0;
  numbers: number[];
  lastAlbumClicked: Album;

  constructor() {}

  ngOnInit(): void {
    this.albumsArray = this.albumsArray = ALBUMS;
  }
  parentFunctionHandler(album) {
    this.lastAlbumClicked = album;
    alert(
      "Album " + album.album_name + " was sent from the album card component"
    );
  }
}
