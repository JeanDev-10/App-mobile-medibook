import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitulosPage } from './titulos.page';

const routes: Routes = [
  {
    path: '',
    component: TitulosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TitulosPageRoutingModule {}
