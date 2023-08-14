import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { ExamenesMedicosCrearPageRoutingModule } from './examenes-medicos-crear-routing.module';

import { ExamenesMedicosCrearPage } from './examenes-medicos-crear.page';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { CoreModule } from 'src/app/core/core.module';


export function playerFactory() {
  return player;
}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamenesMedicosCrearPageRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
    ReactiveFormsModule,CoreModule

  ],
  declarations: [ExamenesMedicosCrearPage]
})
export class ExamenesMedicosCrearPageModule {}
