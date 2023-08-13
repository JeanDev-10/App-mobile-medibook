import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservacionCrearPage } from './observacion-crear.page';

const routes: Routes = [
  {
    path: '',
    component: ObservacionCrearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservacionCrearPageRoutingModule {}
