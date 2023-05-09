import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MaterialModule } from "src/app/core/material.module";
import { RouterModule } from "@angular/router";
import { GenTableComponent } from "./gen-table/gen-table.component";
import { InfiniteScrollModule } from "ngx-infinite-scroll";

@NgModule({
  declarations: [HeaderComponent, FooterComponent, GenTableComponent],
  imports: [CommonModule, MaterialModule, RouterModule, InfiniteScrollModule],
  exports: [HeaderComponent, FooterComponent, GenTableComponent],
})
export class ComponentsModule {}
