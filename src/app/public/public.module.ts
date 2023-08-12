import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [PublicComponent],
  imports: [
    CommonModule,
    IonicModule,
    PublicRoutingModule,
    HttpClientModule
  ]
})
export class PublicModule { }
