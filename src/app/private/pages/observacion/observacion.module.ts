import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObservacionPageRoutingModule } from './observacion-routing.module';

import { ObservacionPage } from './observacion.page';
import { CoreModule } from 'src/app/core/core.module';
import { CardObservacionesComponent } from './components/card-observaciones/card-observaciones.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObservacionPageRoutingModule,
    ReactiveFormsModule,CoreModule
  ],
  declarations: [ObservacionPage,CardObservacionesComponent]
})
export class ObservacionPageModule {}
