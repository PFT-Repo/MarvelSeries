import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BackBtnComponent } from "./back-btn/back-btn.component";
import { SpinnerComponent } from "./spinner/spinner.component";

@NgModule({
  declarations: [BackBtnComponent, SpinnerComponent],
  imports: [CommonModule],
  exports: [SpinnerComponent],
})
export class ComponentsModule {}
