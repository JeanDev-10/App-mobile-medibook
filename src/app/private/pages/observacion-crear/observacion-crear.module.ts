import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObservacionCrearPageRoutingModule } from './observacion-crear-routing.module';

import { ObservacionCrearPage } from './observacion-crear.page';
import { LottieModule } from 'ngx-lottie';
import { playerFactory } from '../citas-medicas-crear/citas-medicas-crear.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObservacionCrearPageRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
    ReactiveFormsModule,
    CoreModule
  ],
  declarations: [ObservacionCrearPage]
})
export class ObservacionCrearPageModule {}
