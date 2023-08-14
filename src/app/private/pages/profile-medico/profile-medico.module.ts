import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileMedicoPageRoutingModule } from './profile-medico-routing.module';

import { ProfileMedicoPage } from './profile-medico.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileMedicoPageRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ],
  declarations: [ProfileMedicoPage]
})
export class ProfileMedicoPageModule {}
