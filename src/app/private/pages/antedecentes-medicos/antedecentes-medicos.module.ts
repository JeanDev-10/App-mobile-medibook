import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntedecentesMedicosPageRoutingModule } from './antedecentes-medicos-routing.module';

import { AntedecentesMedicosPage } from './antedecentes-medicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntedecentesMedicosPageRoutingModule
  ],
  declarations: [AntedecentesMedicosPage]
})
export class AntedecentesMedicosPageModule {}
