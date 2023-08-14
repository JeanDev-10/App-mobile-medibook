import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitulosDetallePage } from './titulos-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: TitulosDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TitulosDetallePageRoutingModule {}
