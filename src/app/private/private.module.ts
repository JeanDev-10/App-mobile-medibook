import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { PrivateRoutingModule } from './private-routing.module';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [PrivateComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    IonicModule,
    HttpClientModule
  ]
})
export class PrivateModule { }
