import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagosPageRoutingModule } from './pagos-routing.module';

import { PagosPage } from './pagos.page';
import { CoreModule } from 'src/app/core/core.module';
import { CardPagosComponent } from './components/card-pagos/card-pagos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagosPageRoutingModule,
    CoreModule
  ],
  declarations: [PagosPage,CardPagosComponent]
})
export class PagosPageModule {}
