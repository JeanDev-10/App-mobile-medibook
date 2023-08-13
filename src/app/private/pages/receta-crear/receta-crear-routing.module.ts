import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetaCrearPage } from './receta-crear.page';

const routes: Routes = [
  {
    path: '',
    component: RecetaCrearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetaCrearPageRoutingModule {}
