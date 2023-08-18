import { Component, Input, OnInit } from '@angular/core';
import { EventEmitterService } from '../dudas/services/event-emitter.service';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.page.html',
  styleUrls: ['./titulos.page.scss'],
})
export class TitulosPage implements OnInit {
  @Input() medico!:any;
  titulo!:any;
  

  ngOnInit() {
  }

}
