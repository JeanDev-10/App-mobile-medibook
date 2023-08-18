import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-profile-paciente',
  templateUrl: './profile-paciente.page.html',
  styleUrls: ['./profile-paciente.page.scss'],
})
export class ProfilePacientePage implements OnInit {
  id:any
  paciente:any
  constructor(private route: ActivatedRoute,private readonly pacienteService:PacienteService) {
    this.route.params.subscribe(params => {
      this.id = params['id']; // Aquí obtienes el valor del parámetro :id de la URL
      // Puedes usar this.id como quieras en tu componente
      this.pacienteService.getOnePaciente(this.id).subscribe((data)=>{
        console.log(data)
        this.paciente=data;
      })
    });
   }

  ngOnInit() {
  }
  handleRefresh(event:any){
    this.pacienteService.getOnePaciente(this.id).subscribe((data)=>{
      console.log(data)
      this.paciente=data;
      event.target.complete();
    })
  }
}
