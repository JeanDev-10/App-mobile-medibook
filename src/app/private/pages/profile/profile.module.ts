import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { CoreModule } from 'src/app/core/core.module';
import { CardItemsTitulosComponent } from './components/card-items-titulos/card-items-titulos.component';
import { CardItemsComponent } from './components/card-items/card-items.component';
import { CardItemsAntecedentesComponent } from './components/card-items-antecedentes/card-items-antecedentes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    CoreModule,
    ReactiveFormsModule
  ],
  declarations: [ProfilePage,CardItemsTitulosComponent,CardItemsComponent,CardItemsAntecedentesComponent]
})
export class ProfilePageModule {}
