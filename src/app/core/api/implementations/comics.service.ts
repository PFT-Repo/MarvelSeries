import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Comic, DataWrapper } from "src/app/shared/models/comic";
import { ComicViewModel } from "src/app/shared/models/comic-view-model";
import { comicDto2Vm } from "src/app/shared/utils/comic-dto-2-vm";

@Injectable({
  providedIn: "root",
})
export class ComicsService {
  private url = `${environment.BASE_URL}/comics`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<ComicViewModel[]> {
    const options =
      "format=comic&formatType=comic&noVariants=true&dateDescriptor=thisMonth&orderBy=focDate&";
    const url = `${this.url}?${options}`;
    return this.http
      .get<DataWrapper<Comic[]>>(url)
      .pipe(
        map((data) => data.data.results.map((comic) => comicDto2Vm(comic)))
      );
  }

  private getAllWithOptions(options: string): Observable<ComicViewModel[]> {
    const url = `${this.url}?${options}`;
    return this.http.get<DataWrapper<Comic[]>>(url).pipe(
      // tap((data) => console.log(data)),
      map((data) => data.data.results.map((comic) => comicDto2Vm(comic)))
      // tap((transformedData) => console.log(transformedData))
    );
  }

  getNewReleases(): Observable<ComicViewModel[]> {
    const options =
      "format=comic&formatType=comic&noVariants=true&dateDescriptor=thisMonth&orderBy=focDate";
    return this.getAllWithOptions(options);
  }

  getBestSellingDigital(): Observable<ComicViewModel[]> {
    const options =
      "format=digital%20comic&formatType=comic&noVariants=true&hasDigitalIssue=true&offset=50";
    return this.getAllWithOptions(options);
  }

  getReadForFree(): Observable<ComicViewModel[]> {
    const options =
      "format=digital%20comic&formatType=comic&noVariants=true&hasDigitalIssue=true&offset=100";
    return this.getAllWithOptions(options);
  }

  get(id: number): Observable<ComicViewModel> {
    const url = `${this.url}/${id}`;
    return this.http
      .get<DataWrapper<Comic[]>>(url)
      .pipe(map((data) => comicDto2Vm(data.data.results[0])));
  }
}
