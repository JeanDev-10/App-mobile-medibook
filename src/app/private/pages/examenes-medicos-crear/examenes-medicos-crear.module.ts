import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { ExamenesMedicosCrearPageRoutingModule } from './examenes-medicos-crear-routing.module';

import { ExamenesMedicosCrearPage } from './examenes-medicos-crear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamenesMedicosCrearPageRoutingModule,
    ReactiveFormsModule,
    
  ],
  declarations: [ExamenesMedicosCrearPage]
})
export class ExamenesMedicosCrearPageModule {}
