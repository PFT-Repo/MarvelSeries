import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FeaturesRoutingModule } from "./features-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [],
  imports: [SharedModule, CommonModule, FeaturesRoutingModule],
})
export class FeaturesModule {}
