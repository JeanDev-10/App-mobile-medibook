import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetasDetallePage } from './recetas-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: RecetasDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetasDetallePageRoutingModule {}
