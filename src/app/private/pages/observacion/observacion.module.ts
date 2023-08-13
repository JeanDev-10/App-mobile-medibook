import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObservacionPageRoutingModule } from './observacion-routing.module';

import { ObservacionPage } from './observacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObservacionPageRoutingModule
  ],
  declarations: [ObservacionPage]
})
export class ObservacionPageModule {}
