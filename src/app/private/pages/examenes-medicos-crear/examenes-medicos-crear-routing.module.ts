import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamenesMedicosCrearPage } from './examenes-medicos-crear.page';

const routes: Routes = [
  {
    path: '',
    component: ExamenesMedicosCrearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamenesMedicosCrearPageRoutingModule {}
