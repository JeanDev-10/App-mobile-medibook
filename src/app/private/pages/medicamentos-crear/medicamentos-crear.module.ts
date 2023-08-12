import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicamentosCrearPageRoutingModule } from './medicamentos-crear-routing.module';

import { MedicamentosCrearPage } from './medicamentos-crear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicamentosCrearPageRoutingModule
  ],
  declarations: [MedicamentosCrearPage]
})
export class MedicamentosCrearPageModule {}
