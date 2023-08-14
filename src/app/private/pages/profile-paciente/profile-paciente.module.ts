import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePacientePageRoutingModule } from './profile-paciente-routing.module';

import { ProfilePacientePage } from './profile-paciente.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePacientePageRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ],
  declarations: [ProfilePacientePage]
})
export class ProfilePacientePageModule {}
