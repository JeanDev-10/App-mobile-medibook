import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VacunasCrearPage } from './vacunas-crear.page';

const routes: Routes = [
  {
    path: '',
    component: VacunasCrearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VacunasCrearPageRoutingModule {}
