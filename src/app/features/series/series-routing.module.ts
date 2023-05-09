import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SeriesComponent } from "./pages/series/series.component";
import { SeriesDetailComponent } from "./pages/series-detail/series-detail.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", component: SeriesComponent },
      { path: ":id", component: SeriesDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeriesRoutingModule {}
