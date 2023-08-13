import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagosDetallePage } from './pagos-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: PagosDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagosDetallePageRoutingModule {}
