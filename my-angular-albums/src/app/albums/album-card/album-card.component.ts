import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Album } from "../album.model";

@Component({
  selector: "app-album-card",
  templateUrl: "./album-card.component.html",
  styleUrls: ["./album-card.component.css"]
})
export class AlbumCardComponent implements OnInit {
  @Input()
  album: Album;

  @Output()
  albumClicked: EventEmitter<Album> = new EventEmitter<Album>();

  newPrice: any;

  constructor() {}

  ngOnInit() {
    if (this.album.on_sale) {
      this.newPrice = this.album.price - this.album.price * 0.1;
    }
  }

  showAlbum() {
    this.albumClicked.emit(this.album);
    // alert("Album selected: " + this.album.album_name);
  }
  logArtist() {
    console.log("Artist selected: " + this.album.artist);
  }
}
