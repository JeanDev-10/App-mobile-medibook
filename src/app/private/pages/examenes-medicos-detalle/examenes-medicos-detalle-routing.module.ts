import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamenesMedicosDetallePage } from './examenes-medicos-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: ExamenesMedicosDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamenesMedicosDetallePageRoutingModule {}
