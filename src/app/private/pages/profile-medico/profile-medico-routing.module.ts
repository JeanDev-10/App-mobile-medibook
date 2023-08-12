import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileMedicoPage } from './profile-medico.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileMedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileMedicoPageRoutingModule {}
