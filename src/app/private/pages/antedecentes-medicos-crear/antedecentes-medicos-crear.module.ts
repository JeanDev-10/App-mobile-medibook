import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntedecentesMedicosCrearPageRoutingModule } from './antedecentes-medicos-crear-routing.module';

import { AntedecentesMedicosCrearPage } from './antedecentes-medicos-crear.page';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { CoreModule } from 'src/app/core/core.module';


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
    AntedecentesMedicosCrearPageRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
    ReactiveFormsModule,CoreModule
  ],
  declarations: [AntedecentesMedicosCrearPage]
})
export class AntedecentesMedicosCrearPageModule {}
