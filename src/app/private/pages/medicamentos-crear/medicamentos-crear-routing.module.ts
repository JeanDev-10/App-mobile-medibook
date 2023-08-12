import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicamentosCrearPage } from './medicamentos-crear.page';

const routes: Routes = [
  {
    path: '',
    component: MedicamentosCrearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicamentosCrearPageRoutingModule {}
