import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TitulosCrearPageRoutingModule } from './titulos-crear-routing.module';

import { TitulosCrearPage } from './titulos-crear.page';
import { CoreModule } from 'src/app/core/core.module';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TitulosCrearPageRoutingModule,CoreModule,ReactiveFormsModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  declarations: [TitulosCrearPage]
})
export class TitulosCrearPageModule {}
