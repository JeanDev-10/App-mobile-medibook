import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObservacionDetallePageRoutingModule } from './observacion-detalle-routing.module';

import { ObservacionDetallePage } from './observacion-detalle.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObservacionDetallePageRoutingModule,
    ReactiveFormsModule,
    CoreModule

  ],
  declarations: [ObservacionDetallePage]
})
export class ObservacionDetallePageModule {}
