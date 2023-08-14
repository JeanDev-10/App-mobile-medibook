import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TitulosCrearPageRoutingModule } from './titulos-crear-routing.module';

import { TitulosCrearPage } from './titulos-crear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TitulosCrearPageRoutingModule
  ],
  declarations: [TitulosCrearPage]
})
export class TitulosCrearPageModule {}
