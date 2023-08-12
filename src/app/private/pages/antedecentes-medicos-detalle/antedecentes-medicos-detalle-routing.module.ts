import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntedecentesMedicosDetallePage } from './antedecentes-medicos-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: AntedecentesMedicosDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntedecentesMedicosDetallePageRoutingModule {}
