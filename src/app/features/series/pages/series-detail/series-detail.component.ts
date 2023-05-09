import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { SeriesService } from "src/app/core/api/implementations/series.service";
import { TableViewModel } from "src/app/shared/models/table-view-model";

@Component({
  selector: "app-series-detail",
  templateUrl: "./series-detail.component.html",
  styleUrls: ["./series-detail.component.scss"],
})
export class SeriesDetailComponent implements OnInit {
  id!: number;
  DetailSeries: Observable<TableViewModel[] | undefined> = new Observable<
    TableViewModel[]
  >();
  constructor(
    private seriesService: SeriesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    console.log(this.id);

    this.DetailSeries = this.seriesService.getAllSerie(this.id);
    console.log(this.DetailSeries);
  }
}
