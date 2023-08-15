import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitterService } from '../../services/event-emitter.service';

@Component({
  selector: 'app-card-duda',
  templateUrl: './card-duda.component.html',
  styleUrls: ['./card-duda.component.scss'],
})
export class CardDudaComponent  implements OnInit {
  @Input() duda!:any
  constructor(private readonly eventEmitterService:EventEmitterService) { }

  ngOnInit() {}
  replyDuda(){
    this.eventEmitterService.setEvent({
      event:"REPLY_DUDA_CREATE",
      id:this.duda.id,
      contenido:this.duda.contenido
    })
  }

}
