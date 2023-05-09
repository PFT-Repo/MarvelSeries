import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { TableViewModel } from "src/app/shared/models/table-view-model";
import { seriesDto2Vm } from "src/app/shared/utils/series-dto-2-vm";
import { MarvelSeries, Result } from "src/app/shared/models/series";
import { IGetAll } from "../contracts/i-get-all";

@Injectable({
  providedIn: "root",
})
export class SeriesService implements IGetAll {
  private url = `${environment.BASE_URL}/series`;

  constructor(private http: HttpClient) {}

  getAllData(): Observable<TableViewModel[] | undefined> {
    const url = `${this.url}`;
    try {
      return this.http
        .get<MarvelSeries>(url)
        .pipe(
          map((data: MarvelSeries) =>
            data.data?.results?.map((series: Result) => seriesDto2Vm(series))
          )
        );
    } catch (error) {
      return this.http
        .get<MarvelSeries>("assets/data/fakeDummySeries.json")
        .pipe(
          map((data: MarvelSeries) =>
            data.data?.results?.map((series: Result) => seriesDto2Vm(series))
          )
        );
    }
  }
  getAllDataT(offset: number): Observable<TableViewModel[] | undefined> {
    const options = `limit=20&offset=${offset}&`;
    const url = `${this.url}?${options}`;
    try {
      return this.http
        .get<MarvelSeries>(url)
        .pipe(
          map((data: MarvelSeries) =>
            data.data?.results?.map((series: Result) => seriesDto2Vm(series))
          )
        );
    } catch (error) {
      return this.http
        .get<MarvelSeries>("assets/data/fakeDummySeries.json")
        .pipe(
          map((data: MarvelSeries) =>
            data.data?.results?.map((series: Result) => seriesDto2Vm(series))
          )
        );
    }
  }

  getAllSerie(id: number): Observable<TableViewModel[] | undefined> {
    const url = `${this.url}/${id}/comics`;
    try {
      return this.http
        .get<MarvelSeries>(url)
        .pipe(
          map((data: MarvelSeries) =>
            data.data?.results?.map((series: Result) => seriesDto2Vm(series))
          )
        );
    } catch (error) {
      return this.http
        .get<MarvelSeries>("assets/data/fakeDummySeries.json")
        .pipe(
          map((data: MarvelSeries) =>
            data.data?.results?.map((series: Result) => seriesDto2Vm(series))
          )
        );
    }
  }
}
