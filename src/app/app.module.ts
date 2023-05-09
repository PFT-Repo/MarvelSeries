import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ApiHashInterceptor } from "./core/interceptors/api-hash.interceptor";
import { ErrorCatchingInterceptor } from "./core/interceptors/error-catching.interceptor";
import { LoadingInterceptor } from "./core/interceptors/loading.interceptor";
import { ComponentsModule } from "./shared/components/components.module";
import { ComponentsModule as CoreComponentsModule } from "./core/components/components.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LottieModule } from "ngx-lottie";
import { NotfoundpageComponent } from "./core/components/notfoundpage/notfoundpage.component";

export function playerFactory() {
  return import("lottie-web");
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ComponentsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ComponentsModule,
    CoreComponentsModule,
    NotfoundpageComponent,
    LottieModule.forRoot({ player: playerFactory }),
    AppRoutingModule,
  ],
  providers: [
    // HttpClient
    { provide: HTTP_INTERCEPTORS, useClass: ApiHashInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorCatchingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
