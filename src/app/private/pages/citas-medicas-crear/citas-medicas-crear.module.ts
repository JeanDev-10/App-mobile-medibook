import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitasMedicasCrearPageRoutingModule } from './citas-medicas-crear-routing.module';

import { CitasMedicasCrearPage } from './citas-medicas-crear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitasMedicasCrearPageRoutingModule
  ],
  declarations: [CitasMedicasCrearPage]
})
export class CitasMedicasCrearPageModule {}
