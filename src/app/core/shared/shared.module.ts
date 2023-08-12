import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { IonicModule } from '@ionic/angular';
import { SignoVitalesComponent } from './components/signo-vitales/signo-vitales.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [ProgressBarComponent, SignoVitalesComponent],
  imports: [CommonModule, IonicModule,LottieModule.forRoot({ player: playerFactory })],
  exports: [ProgressBarComponent, SignoVitalesComponent],
})
export class SharedModule {}
