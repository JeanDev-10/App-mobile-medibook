import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VacunasCrearPageRoutingModule } from './vacunas-crear-routing.module';

import { VacunasCrearPage } from './vacunas-crear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VacunasCrearPageRoutingModule
  ],
  declarations: [VacunasCrearPage]
})
export class VacunasCrearPageModule {}
