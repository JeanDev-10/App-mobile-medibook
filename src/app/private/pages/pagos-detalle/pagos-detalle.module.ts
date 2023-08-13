import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagosDetallePageRoutingModule } from './pagos-detalle-routing.module';

import { PagosDetallePage } from './pagos-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagosDetallePageRoutingModule
  ],
  declarations: [PagosDetallePage]
})
export class PagosDetallePageModule {}
