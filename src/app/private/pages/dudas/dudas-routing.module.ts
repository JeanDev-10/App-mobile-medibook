import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DudasPage } from './dudas.page';

const routes: Routes = [
  {
    path: '',
    component: DudasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DudasPageRoutingModule {}
