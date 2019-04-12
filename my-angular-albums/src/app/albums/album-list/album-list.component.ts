import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Album } from "../album.model";
import { ALBUMS } from "../albums.data";
import { AlbumService } from "../shared/album.service";
import { Observable } from "rxjs";

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

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    // this.albumsArray = this.albumsArray = ALBUMS;
    this.getAlbums();
  }
  parentFunctionHandler(album) {
    this.lastAlbumClicked = album;
    alert(
      "Album " + album.album_name + " was sent from the album card component"
    );
  }

  getAlbums() {
    this.albumService
      .getAlbums()
      .subscribe(
        albums => (this.albumsArray = albums),
        error => console.log("Error: ", error)
      );
    // this.albumsArray = this.albumService.getAlbums();
  }
}
