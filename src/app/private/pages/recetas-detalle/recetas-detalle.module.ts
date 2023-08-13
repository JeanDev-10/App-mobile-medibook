import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetasDetallePageRoutingModule } from './recetas-detalle-routing.module';

import { RecetasDetallePage } from './recetas-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetasDetallePageRoutingModule
  ],
  declarations: [RecetasDetallePage]
})
export class RecetasDetallePageModule {}
