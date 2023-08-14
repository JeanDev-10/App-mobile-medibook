import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TitulosDetallePageRoutingModule } from './titulos-detalle-routing.module';

import { TitulosDetallePage } from './titulos-detalle.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TitulosDetallePageRoutingModule,CoreModule,ReactiveFormsModule
  ],
  declarations: [TitulosDetallePage]
})
export class TitulosDetallePageModule {}
