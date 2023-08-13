import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetaCrearPageRoutingModule } from './receta-crear-routing.module';

import { RecetaCrearPage } from './receta-crear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetaCrearPageRoutingModule
  ],
  declarations: [RecetaCrearPage]
})
export class RecetaCrearPageModule {}
