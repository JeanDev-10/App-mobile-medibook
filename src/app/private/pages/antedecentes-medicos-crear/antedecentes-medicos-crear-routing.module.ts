import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntedecentesMedicosCrearPage } from './antedecentes-medicos-crear.page';

const routes: Routes = [
  {
    path: '',
    component: AntedecentesMedicosCrearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntedecentesMedicosCrearPageRoutingModule {}
