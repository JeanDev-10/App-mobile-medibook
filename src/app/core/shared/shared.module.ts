import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { IonicModule } from '@ionic/angular';
import { SignoVitalesComponent } from './components/signo-vitales/signo-vitales.component';


@NgModule({
  declarations: [ProgressBarComponent, SignoVitalesComponent],
  imports: [CommonModule, IonicModule],
  exports: [ProgressBarComponent, SignoVitalesComponent],
})
export class SharedModule {}
