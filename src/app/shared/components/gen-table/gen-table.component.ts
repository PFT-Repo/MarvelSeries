import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { TableViewModel } from "../../models/table-view-model";
import { SeriesService } from "src/app/core/api/implementations/series.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-gen-table",
  templateUrl: "./gen-table.component.html",
  styleUrls: ["./gen-table.component.scss"],
})
export class GenTableComponent implements OnInit {
  myroute!: string;
  offset = 20;
  @Input() element!: Observable<TableViewModel[] | undefined>;

  constructor(public seriesService: SeriesService, private route: Router) {}
  ngOnInit(): void {
    this.myroute = this.route.url;
  }
  onScroll() {
    setTimeout(() => {
      console.log(this.offset);
      this.element = this.seriesService.getAllDataT(this.offset);
      this.offset += 20;
    }, 1500);
  }
}
