import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntedecentesMedicosDetallePageRoutingModule } from './antedecentes-medicos-detalle-routing.module';

import { AntedecentesMedicosDetallePage } from './antedecentes-medicos-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntedecentesMedicosDetallePageRoutingModule
  ],
  declarations: [AntedecentesMedicosDetallePage]
})
export class AntedecentesMedicosDetallePageModule {}
