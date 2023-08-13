import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReseniaCrearPageRoutingModule } from './resenia-crear-routing.module';

import { ReseniaCrearPage } from './resenia-crear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReseniaCrearPageRoutingModule
  ],
  declarations: [ReseniaCrearPage]
})
export class ReseniaCrearPageModule {}
