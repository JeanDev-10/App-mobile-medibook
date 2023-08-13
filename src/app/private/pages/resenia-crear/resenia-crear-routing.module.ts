import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReseniaCrearPage } from './resenia-crear.page';

const routes: Routes = [
  {
    path: '',
    component: ReseniaCrearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReseniaCrearPageRoutingModule {}
