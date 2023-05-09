import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ComicsService } from "src/app/core/api/implementations/comics.service";
import { ComicViewModel } from "src/app/shared/models/comic-view-model";

@Component({
  selector: "app-comic-detail",
  templateUrl: "./comic-detail.component.html",
  styleUrls: ["./comic-detail.component.scss"],
})
export class ComicDetailComponent implements OnInit {
  comic: ComicViewModel = { id: 0, title: "", imageLink: "" };

  constructor(
    private route: ActivatedRoute,
    private comicsService: ComicsService
  ) {}

  ngOnInit(): void {
    this.loadComic();
  }

  private loadComic(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.comicsService.get(id).subscribe((comic) => (this.comic = comic));
  }
}
