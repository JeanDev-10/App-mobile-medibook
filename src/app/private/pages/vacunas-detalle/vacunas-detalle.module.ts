import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VacunasDetallePageRoutingModule } from './vacunas-detalle-routing.module';

import { VacunasDetallePage } from './vacunas-detalle.page';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VacunasDetallePageRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ],
  declarations: [VacunasDetallePage]
})
export class VacunasDetallePageModule {}
