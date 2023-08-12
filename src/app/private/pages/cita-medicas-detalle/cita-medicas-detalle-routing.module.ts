import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitaMedicasDetallePage } from './cita-medicas-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: CitaMedicasDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitaMedicasDetallePageRoutingModule {}
