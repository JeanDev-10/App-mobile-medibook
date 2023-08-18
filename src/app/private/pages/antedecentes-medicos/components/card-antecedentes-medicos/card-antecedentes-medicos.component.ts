import { Component, Input, OnInit } from '@angular/core';
import { AntecedenteMedicoService } from 'src/app/private/services/antecedente-medico.service';
import { EventEmitterService } from '../../../dudas/services/event-emitter.service';

@Component({
  selector: 'app-card-antecedentes-medicos',
  templateUrl: './card-antecedentes-medicos.component.html',
  styleUrls: ['./card-antecedentes-medicos.component.scss'],
})
export class CardAntecedentesMedicosComponent  implements OnInit {
  constructor(private antecedenteService:AntecedenteMedicoService,private eventEmmiterService:EventEmitterService) {
    this.getAntecedente();
    this.eventEmmiterService.getEvent().subscribe((data)=>{
      if(data.event=='LOAD_ANTECEDENTES'){
        this.getAntecedente()
      }
    })
  }

  ngOnInit() {}
  antecedente!:any;
  getAntecedente(){
    this.antecedenteService.obtenerTodos().subscribe((data) => {
      console.log(data);
      this.antecedente = data.antecedentes_medicos;
  })
  }

}
