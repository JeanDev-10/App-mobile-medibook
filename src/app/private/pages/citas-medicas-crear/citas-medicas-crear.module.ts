import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitasMedicasCrearPageRoutingModule } from './citas-medicas-crear-routing.module';

import { CitasMedicasCrearPage } from './citas-medicas-crear.page';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitasMedicasCrearPageRoutingModule,
    ReactiveFormsModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  declarations: [CitasMedicasCrearPage]
})
export class CitasMedicasCrearPageModule {}
