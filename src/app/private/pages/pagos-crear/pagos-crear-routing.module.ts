import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagosCrearPage } from './pagos-crear.page';

const routes: Routes = [
  {
    path: '',
    component: PagosCrearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagosCrearPageRoutingModule {}
