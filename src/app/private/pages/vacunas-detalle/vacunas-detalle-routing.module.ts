import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VacunasDetallePage } from './vacunas-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: VacunasDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VacunasDetallePageRoutingModule {}
