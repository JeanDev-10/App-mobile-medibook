import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptorInterceptor } from './core/shared/interceptor/auth.interceptor';
import { SpinnerInterceptor } from './core/shared/interceptor/spinner.interceptor';
import { CoreModule } from './core/core.module';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule
  ,CoreModule,LottieModule.forRoot({ player: playerFactory })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: SpinnerInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent],
})
export class AppModule {}
