import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TitulosPageRoutingModule } from './titulos-routing.module';

import { TitulosPage } from './titulos.page';
import { CardsTitulosComponent } from './components/cards-titulos/cards-titulos.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TitulosPageRoutingModule,CoreModule
  ],
  declarations: [TitulosPage,CardsTitulosComponent]
})
export class TitulosPageModule {}
