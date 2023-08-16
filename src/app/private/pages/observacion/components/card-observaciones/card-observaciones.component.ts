import { Component, Input, OnInit } from '@angular/core';
import { ObservacionService } from 'src/app/private/services/observacion.service';

@Component({
  selector: 'app-card-observaciones',
  templateUrl: './card-observaciones.component.html',
  styleUrls: ['./card-observaciones.component.scss'],
})
export class CardObservacionesComponent  implements OnInit {

  constructor(private observacionService:ObservacionService) {

  }
  @Input() observaciones!:any
  ngOnInit() {}

}
