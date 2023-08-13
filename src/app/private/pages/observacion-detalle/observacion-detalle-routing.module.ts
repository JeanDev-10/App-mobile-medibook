import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservacionDetallePage } from './observacion-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: ObservacionDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservacionDetallePageRoutingModule {}
