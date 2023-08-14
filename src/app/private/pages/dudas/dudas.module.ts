import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DudasPageRoutingModule } from './dudas-routing.module';

import { DudasPage } from './dudas.page';
import { CoreModule } from 'src/app/core/core.module';
import { CardDudaComponent } from './components/card-duda/card-duda.component';
import { CardReplyDudaComponent } from './components/card-reply-duda/card-reply-duda.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DudasPageRoutingModule,CoreModule,
    ReactiveFormsModule
  ],
  declarations: [DudasPage,CardDudaComponent,CardReplyDudaComponent]
})
export class DudasPageModule {}
