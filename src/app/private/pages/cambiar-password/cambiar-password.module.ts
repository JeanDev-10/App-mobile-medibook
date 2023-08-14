import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { CambiarPasswordPageRoutingModule } from './cambiar-password-routing.module';

import { CambiarPasswordPage } from './cambiar-password.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarPasswordPageRoutingModule,
    ReactiveFormsModule,
   CoreModule

  ],
  declarations: [CambiarPasswordPage]
})
export class CambiarPasswordPageModule {}
