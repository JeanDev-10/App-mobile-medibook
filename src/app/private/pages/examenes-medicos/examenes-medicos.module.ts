import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamenesMedicosPageRoutingModule } from './examenes-medicos-routing.module';

import { ExamenesMedicosPage } from './examenes-medicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamenesMedicosPageRoutingModule
  ],
  declarations: [ExamenesMedicosPage]
})
export class ExamenesMedicosPageModule {}
