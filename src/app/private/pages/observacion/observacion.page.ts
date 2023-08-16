import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/public/services/auth.service';
import { ObservacionService } from '../../services/observacion.service';
import { PacienteService } from '../../services/paciente.service';
import { MedicoService } from '../../services/medico.service';

@Component({
  selector: 'app-observacion',
  templateUrl: './observacion.page.html',
  styleUrls: ['./observacion.page.scss'],
})
export class ObservacionPage implements OnInit {
user!:any;
observaciones!:any;
rol!:any;
paciente!:any;
medico!:any;
  constructor(private authService:AuthService,private observacionService:ObservacionService,private pacienteService: PacienteService, private medicoService:MedicoService ) {
    this.authService.userInformation().subscribe((data)=>{
      console.log(data)
      this.rol=data.rol.id;
      if(this.rol===3){
        this.pacienteService.getPacienteInformation(data.id).subscribe((data)=>{
          console.log(data)
          this.paciente=data;
        })
      }else if(this.rol==2){
        this.medicoService.getMedicoInformation(data.id).subscribe((data)=>{
          console.log(data)
          this.medico=data;
        })
      }
    })

  }

  ngOnInit() {
  }


}
