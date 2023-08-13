import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObservacionDetallePageRoutingModule } from './observacion-detalle-routing.module';

import { ObservacionDetallePage } from './observacion-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObservacionDetallePageRoutingModule
  ],
  declarations: [ObservacionDetallePage]
})
export class ObservacionDetallePageModule {}
