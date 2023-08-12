import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitaMedicasDetallePageRoutingModule } from './cita-medicas-detalle-routing.module';

import { CitaMedicasDetallePage } from './cita-medicas-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitaMedicasDetallePageRoutingModule
  ],
  declarations: [CitaMedicasDetallePage]
})
export class CitaMedicasDetallePageModule {}
