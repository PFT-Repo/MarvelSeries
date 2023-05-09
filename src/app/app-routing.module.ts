import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./core/auth/guards/auth.guard";
import { LoginGuard } from "./core/guards/login.guard";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "login",
    loadChildren: () =>
      import("src/app/core/auth/auth.module").then((m) => m.AuthModule),
    canActivate: [LoginGuard],
  },
  {
    path: "private",
    loadChildren: () =>
      import("src/app/features/features.module").then((m) => m.FeaturesModule),
    canActivate: [AuthGuard],
  },
  {
    path: "**",
    loadComponent: () =>
      import(
        "src/app/core/components/notfoundpage/notfoundpage.component"
      ).then((m) => m.NotfoundpageComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
