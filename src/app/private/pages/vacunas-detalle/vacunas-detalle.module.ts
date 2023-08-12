import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VacunasDetallePageRoutingModule } from './vacunas-detalle-routing.module';

import { VacunasDetallePage } from './vacunas-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VacunasDetallePageRoutingModule
  ],
  declarations: [VacunasDetallePage]
})
export class VacunasDetallePageModule {}
