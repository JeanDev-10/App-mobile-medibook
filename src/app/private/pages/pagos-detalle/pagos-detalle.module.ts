import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagosDetallePageRoutingModule } from './pagos-detalle-routing.module';

import { PagosDetallePage } from './pagos-detalle.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagosDetallePageRoutingModule,
    CoreModule
  ],
  declarations: [PagosDetallePage]
})
export class PagosDetallePageModule {}
