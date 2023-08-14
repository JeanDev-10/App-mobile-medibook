import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReseniaCrearPageRoutingModule } from './resenia-crear-routing.module';

import { ReseniaCrearPage } from './resenia-crear.page';
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
    ReseniaCrearPageRoutingModule,
    ReactiveFormsModule,
    LottieModule.forRoot({ player: playerFactory }),
    ReactiveFormsModule,
    CoreModule
  ],
  declarations: [ReseniaCrearPage]
})
export class ReseniaCrearPageModule {}
