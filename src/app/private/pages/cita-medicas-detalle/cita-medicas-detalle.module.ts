import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitaMedicasDetallePageRoutingModule } from './cita-medicas-detalle-routing.module';

import { CitaMedicasDetallePage } from './cita-medicas-detalle.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitaMedicasDetallePageRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ],
  declarations: [CitaMedicasDetallePage]
})
export class CitaMedicasDetallePageModule {}
