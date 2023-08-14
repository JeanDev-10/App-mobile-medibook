import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamenesMedicosDetallePageRoutingModule } from './examenes-medicos-detalle-routing.module';

import { ExamenesMedicosDetallePage } from './examenes-medicos-detalle.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamenesMedicosDetallePageRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ],
  declarations: [ExamenesMedicosDetallePage]
})
export class ExamenesMedicosDetallePageModule {}
