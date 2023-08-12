import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitasMedicasCrearPage } from './citas-medicas-crear.page';

const routes: Routes = [
  {
    path: '',
    component: CitasMedicasCrearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitasMedicasCrearPageRoutingModule {}
