import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitasMedicasPageRoutingModule } from './citas-medicas-routing.module';

import { CitasMedicasPage } from './citas-medicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitasMedicasPageRoutingModule
  ],
  declarations: [CitasMedicasPage]
})
export class CitasMedicasPageModule {}
