import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { IonicModule } from '@ionic/angular';
import { SignoVitalesComponent } from './components/signo-vitales/signo-vitales.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [ProgressBarComponent, SignoVitalesComponent,NavbarComponent],
  imports: [CommonModule, IonicModule,LottieModule.forRoot({ player: playerFactory }),ReactiveFormsModule,FormsModule],
  exports: [ProgressBarComponent, SignoVitalesComponent,NavbarComponent],
})
export class SharedModule {}
