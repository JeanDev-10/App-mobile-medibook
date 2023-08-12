import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePacientePage } from './profile-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePacientePageRoutingModule {}
