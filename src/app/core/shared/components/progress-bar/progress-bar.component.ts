import { Component } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
 /*  isLoading$=this.spinnerService.isLoading$; */
   isLoading$=of(true);
  constructor(private  spinnerService: SpinnerService){}


}
