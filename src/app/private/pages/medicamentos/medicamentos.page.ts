import { MedicamentosService } from './../../services/medicamentos.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { EventEmitterService } from '../dudas/services/event-emitter.service';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.page.html',
  styleUrls: ['./medicamentos.page.scss'],
})
export class MedicamentosPage implements OnInit {

  idMedicamento!:number;


  constructor(private medicamentosService:MedicamentosService,private eventEmmiterService:EventEmitterService) {
    this.eventEmmiterService.getEvent().subscribe((event:any)=>{
      console.log(event);
      if(event.event==='LOAD_MEDICAMENTOS'){
        this.Obtener_Todos_Medicamentos()
      }
    })
  }

  ngOnInit() {
    this.Obtener_Todos_Medicamentos();
  }

  Index_medicamentos:any;


  Obtener_Todos_Medicamentos(){
    this.medicamentosService.Traer_Todos_Los_Medicamentos().subscribe({
      next: (s:any) =>{
        this.Index_medicamentos = s.Informacion.medicamento;
        console.log(this.Index_medicamentos);
      }
    })
  }



}
