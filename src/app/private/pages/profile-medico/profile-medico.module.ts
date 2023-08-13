import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileMedicoPageRoutingModule } from './profile-medico-routing.module';

import { ProfileMedicoPage } from './profile-medico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileMedicoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProfileMedicoPage]
})
export class ProfileMedicoPageModule {}
