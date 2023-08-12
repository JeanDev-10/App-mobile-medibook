import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntedecentesMedicosCrearPageRoutingModule } from './antedecentes-medicos-crear-routing.module';

import { AntedecentesMedicosCrearPage } from './antedecentes-medicos-crear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntedecentesMedicosCrearPageRoutingModule
  ],
  declarations: [AntedecentesMedicosCrearPage]
})
export class AntedecentesMedicosCrearPageModule {}
