import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitasMedicasPage } from './citas-medicas.page';

const routes: Routes = [
  {
    path: '',
    component: CitasMedicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitasMedicasPageRoutingModule {}
