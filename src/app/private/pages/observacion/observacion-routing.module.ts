import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservacionPage } from './observacion.page';

const routes: Routes = [
  {
    path: '',
    component: ObservacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservacionPageRoutingModule {}
