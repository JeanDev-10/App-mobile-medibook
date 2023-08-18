import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-historial-medico',
  templateUrl: './historial-medico.page.html',
  styleUrls: ['./historial-medico.page.scss'],
})
export class HistorialMedicoPage implements OnInit {
  id:any
  historial:any
  constructor(private route: ActivatedRoute,private readonly pacienteService:PacienteService) {
    this.route.params.subscribe(params => {
      this.id = params['id']; // Aquí obtienes el valor del parámetro :id de la URL
      // Puedes usar this.id como quieras en tu componente
      this.pacienteService.historialMedico(this.id).subscribe(data=>{
        console.log(data)
        this.historial=data;
      })
    });
   }

  ngOnInit() {
  }
  handleRefresh(event:any){
    this.pacienteService.historialMedico(this.id).subscribe(data=>{
      console.log(data)
      this.historial=data;
      event.target.complete();
    })
  }
}
