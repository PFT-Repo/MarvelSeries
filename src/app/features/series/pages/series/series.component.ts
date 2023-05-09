import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { SeriesService } from "src/app/core/api/implementations/series.service";
import { TableViewModel } from "src/app/shared/models/table-view-model";

@Component({
  selector: "app-series",
  templateUrl: "./series.component.html",
  styleUrls: ["./series.component.scss"],
})
export class SeriesComponent implements OnInit {
  allSeries: Observable<TableViewModel[] | undefined> = new Observable<
    TableViewModel[]
  >();
  constructor(private seriesService: SeriesService) {}
  ngOnInit(): void {
    this.allSeries = this.seriesService.getAllData();
  }
}
