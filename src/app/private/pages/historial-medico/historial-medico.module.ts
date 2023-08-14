import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialMedicoPageRoutingModule } from './historial-medico-routing.module';

import { HistorialMedicoPage } from './historial-medico.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialMedicoPageRoutingModule,
    CoreModule
  ],
  declarations: [HistorialMedicoPage]
})
export class HistorialMedicoPageModule {}
