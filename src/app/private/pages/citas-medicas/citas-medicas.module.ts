import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitasMedicasPageRoutingModule } from './citas-medicas-routing.module';

import { CitasMedicasPage } from './citas-medicas.page';
import { CardCitasComponent } from './components/card-citas/card-citas.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitasMedicasPageRoutingModule,
    CoreModule
  ],
  declarations: [CitasMedicasPage,CardCitasComponent]
})
export class CitasMedicasPageModule {}
