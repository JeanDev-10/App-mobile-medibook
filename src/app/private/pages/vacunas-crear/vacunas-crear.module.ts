import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VacunasCrearPageRoutingModule } from './vacunas-crear-routing.module';

import { VacunasCrearPage } from './vacunas-crear.page';
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
    VacunasCrearPageRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
    ReactiveFormsModule
  ],
  declarations: [VacunasCrearPage]
})
export class VacunasCrearPageModule {}
