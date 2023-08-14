import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntedecentesMedicosPageRoutingModule } from './antedecentes-medicos-routing.module';

import { AntedecentesMedicosPage } from './antedecentes-medicos.page';
import { CoreModule } from 'src/app/core/core.module';
import { CardAntecedentesMedicosComponent } from './components/card-antecedentes-medicos/card-antecedentes-medicos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntedecentesMedicosPageRoutingModule,CoreModule
  ],
  declarations: [AntedecentesMedicosPage,CardAntecedentesMedicosComponent]
})
export class AntedecentesMedicosPageModule {}
