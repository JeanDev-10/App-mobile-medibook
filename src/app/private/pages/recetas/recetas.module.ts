import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetasPageRoutingModule } from './recetas-routing.module';

import { RecetasPage } from './recetas.page';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { CoreModule } from 'src/app/core/core.module';
import { CardRecetasComponent } from './component/card-recetas/card-recetas.component';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetasPageRoutingModule,CoreModule
  ],
  declarations: [RecetasPage,CardRecetasComponent]
})
export class RecetasPageModule {}
