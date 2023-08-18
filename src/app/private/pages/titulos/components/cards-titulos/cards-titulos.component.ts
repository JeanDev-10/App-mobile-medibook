import { Component, Input, OnInit } from '@angular/core';
import { MedicoService } from 'src/app/private/services/medico.service';
import { TituloService } from 'src/app/private/services/titulo.service';
import { EventEmitterService } from '../../../dudas/services/event-emitter.service';

@Component({
  selector: 'app-cards-titulos',
  templateUrl: './cards-titulos.component.html',
  styleUrls: ['./cards-titulos.component.scss'],
})
export class CardsTitulosComponent  implements OnInit {

  constructor(private tituloService:TituloService,private medicoSerivce:MedicoService ,private eventEmitterService:EventEmitterService) {
    this.getTitulo();
    this.eventEmitterService.getEvent().subscribe((event)=>{
      console.log(event);
      if(event.event==='LOAD_TITULOS'){
        console.log("load more titles");
        this.getTitulo()
      }
    })
  }

  ngOnInit() {}
  title!:any;
  getTitulo(){
    this.medicoSerivce.obtenerMedico().subscribe((data)=>{
      console.log(data.titulo);
      this.title=data.titulo
    })
    /* this.tituloService.obtenerTodos().subscribe((data) => {
      console.log(data);
      this.title = data.titulos;
  }) */
  }
}
