import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagosCrearPageRoutingModule } from './pagos-crear-routing.module';

import { PagosCrearPage } from './pagos-crear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagosCrearPageRoutingModule
  ],
  declarations: [PagosCrearPage]
})
export class PagosCrearPageModule {}
