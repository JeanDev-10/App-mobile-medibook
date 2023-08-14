import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicamentosDetallePageRoutingModule } from './medicamentos-detalle-routing.module';

import { MedicamentosDetallePage } from './medicamentos-detalle.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicamentosDetallePageRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ],
  declarations: [MedicamentosDetallePage]
})
export class MedicamentosDetallePageModule {}
