import { Component, OnInit } from "@angular/core";
import { Family } from "../family.model";

@Component({
  selector: "app-family",
  templateUrl: "./family.component.html",
  styleUrls: ["./family.component.css"]
})
export class FamilyComponent implements OnInit {
  family: Family[];

  constructor() {}

  ngOnInit() {
    this.family = [
      {
        name: "Devin Tilghman",
        age: 1,
        relationship: "son"
      }
    ];
  }
}
