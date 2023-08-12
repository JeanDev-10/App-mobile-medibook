import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DudasPageRoutingModule } from './dudas-routing.module';

import { DudasPage } from './dudas.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DudasPageRoutingModule,CoreModule
  ],
  declarations: [DudasPage]
})
export class DudasPageModule {}
