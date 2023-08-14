import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamenesMedicosPageRoutingModule } from './examenes-medicos-routing.module';

import { ExamenesMedicosPage } from './examenes-medicos.page';
import { CoreModule } from 'src/app/core/core.module';
import { CardExamenesMedicosComponent } from './components/card-examenes-medicos/card-examenes-medicos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamenesMedicosPageRoutingModule,
    CoreModule
  ],
  declarations: [ExamenesMedicosPage,CardExamenesMedicosComponent]
})
export class ExamenesMedicosPageModule {}
