import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/core/shared/services/toast.service';
import { AuthService } from 'src/app/public/services/auth.service';
import { MedicoService } from '../../services/medico.service';
import { Router } from '@angular/router';
import { PacienteService } from '../../services/paciente.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-citas-medicas',
  templateUrl: './citas-medicas.page.html',
  styleUrls: ['./citas-medicas.page.scss'],
})
export class CitasMedicasPage implements OnInit {
  rol!:number;
  paciente:any=null
  medico:any=null
  citas:any=null
  constructor(private authService: AuthService,private toastService: ToastService,private router:Router,private medicoService:MedicoService,private pacienteService:PacienteService) {
    this.authService.userInformation().subscribe((data)=>{
      console.log(data)
      this.rol=data.rol.id;
      if(this.rol===3){
        this.pacienteService.obtenerPaciente().pipe(map(res=>res.cita)).subscribe((data)=>{
          console.log(data)

          this.citas=data;
        })
      }else if(this.rol==2){
        this.medicoService.obtenerMedico().pipe(map(res=>res.cita)).subscribe((data)=>{
          console.log(data)

          this.citas=data;
        })
      }
    })
  }

  ngOnInit() {
  }
  handleRefresh(event:any){
  this.authService.userInformation().subscribe((data)=>{
    console.log(data)
    this.rol=data.rol.id;
    if(this.rol===3){
      this.pacienteService.obtenerPaciente().pipe(map(res=>res.cita)).subscribe((data)=>{
        console.log(data)
        event.target.complete();
        this.citas=data;
      })
    }else if(this.rol==2){
      this.medicoService.obtenerMedico().pipe(map(res=>res.cita)).subscribe((data)=>{
        console.log(data)
        event.target.complete();
        this.citas=data;
      })
    }
  })
}
}
