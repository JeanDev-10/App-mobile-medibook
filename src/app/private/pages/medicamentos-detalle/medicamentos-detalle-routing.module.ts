import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicamentosDetallePage } from './medicamentos-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: MedicamentosDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicamentosDetallePageRoutingModule {}
