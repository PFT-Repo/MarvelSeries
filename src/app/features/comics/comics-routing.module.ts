import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComicDetailComponent } from "./pages/comic-detail/comic-detail.component";

const routes: Routes = [
  {
    path: ":id",
    component: ComicDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComicsRoutingModule {}
