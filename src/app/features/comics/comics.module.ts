import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { ComicsRoutingModule } from "./comics-routing.module";
import { ComicDetailComponent } from "./pages/comic-detail/comic-detail.component";

@NgModule({
  declarations: [ComicDetailComponent],
  imports: [CommonModule, ComicsRoutingModule, MatCardModule, MatButtonModule],
})
export class ComicsModule {}
