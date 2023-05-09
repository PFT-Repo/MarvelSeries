import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SeriesRoutingModule } from "./series-routing.module";
import { SeriesComponent } from "./pages/series/series.component";
import { SeriesDetailComponent } from "./pages/series-detail/series-detail.component";
import { ComponentsModule } from "../../shared/components/components.module";

@NgModule({
  declarations: [SeriesComponent, SeriesDetailComponent],
  imports: [CommonModule, SeriesRoutingModule, ComponentsModule],
})
export class SeriesModule {}
