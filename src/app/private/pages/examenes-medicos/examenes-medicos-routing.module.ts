import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamenesMedicosPage } from './examenes-medicos.page';

const routes: Routes = [
  {
    path: '',
    component: ExamenesMedicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamenesMedicosPageRoutingModule {}
