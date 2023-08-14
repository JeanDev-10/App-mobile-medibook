import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VacunasPageRoutingModule } from './vacunas-routing.module';

import { VacunasPage } from './vacunas.page';
import { CoreModule } from 'src/app/core/core.module';
import { CardVacunasComponent } from './components/card-vacunas/card-vacunas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VacunasPageRoutingModule,
    CoreModule
  ],
  declarations: [VacunasPage,CardVacunasComponent]
})
export class VacunasPageModule {}
