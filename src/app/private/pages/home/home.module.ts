import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { CoreModule } from 'src/app/core/core.module';
import { CardsItemsComponent } from './components/cards-items/cards-items.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CoreModule
  ],
  declarations: [HomePage,CardsItemsComponent]
})
export class HomePageModule {}
