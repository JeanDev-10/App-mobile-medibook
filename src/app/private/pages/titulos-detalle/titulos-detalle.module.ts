import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TitulosDetallePageRoutingModule } from './titulos-detalle-routing.module';

import { TitulosDetallePage } from './titulos-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TitulosDetallePageRoutingModule
  ],
  declarations: [TitulosDetallePage]
})
export class TitulosDetallePageModule {}
