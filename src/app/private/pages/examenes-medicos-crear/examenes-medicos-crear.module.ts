import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamenesMedicosCrearPageRoutingModule } from './examenes-medicos-crear-routing.module';

import { ExamenesMedicosCrearPage } from './examenes-medicos-crear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamenesMedicosCrearPageRoutingModule
  ],
  declarations: [ExamenesMedicosCrearPage]
})
export class ExamenesMedicosCrearPageModule {}
