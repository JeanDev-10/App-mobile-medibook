import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntedecentesMedicosDetallePageRoutingModule } from './antedecentes-medicos-detalle-routing.module';

import { AntedecentesMedicosDetallePage } from './antedecentes-medicos-detalle.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntedecentesMedicosDetallePageRoutingModule,
    ReactiveFormsModule,CoreModule
  ],
  declarations: [AntedecentesMedicosDetallePage]
})
export class AntedecentesMedicosDetallePageModule {}
