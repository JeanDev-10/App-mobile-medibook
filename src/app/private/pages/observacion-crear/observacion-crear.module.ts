import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObservacionCrearPageRoutingModule } from './observacion-crear-routing.module';

import { ObservacionCrearPage } from './observacion-crear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObservacionCrearPageRoutingModule
  ],
  declarations: [ObservacionCrearPage]
})
export class ObservacionCrearPageModule {}
