import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "series", pathMatch: "full" },
  {
    path: "series",
    loadChildren: () =>
      import("src/app/features/series/series.module").then(
        (m) => m.SeriesModule
      ),
  },
  {
    path: "comics",
    loadChildren: () =>
      import("src/app/features/comics/comics.module").then(
        (m) => m.ComicsModule
      ),
  },

  { path: "**", redirectTo: "series", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
