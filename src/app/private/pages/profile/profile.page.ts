import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/shared/services/toast.service';
import { AuthService } from 'src/app/public/services/auth.service';
import { MedicoService } from '../../services/medico.service';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  rol!:number;
  medico:any=null;
  paciente:any=null;

  constructor(private authService: AuthService,private toastService: ToastService,private router:Router,private medicoService:MedicoService,private pacienteService:PacienteService) {
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
  logout(){
    this.authService.logout().subscribe(data=>{
      this.authService.deleteToken();
      this.router.navigate(['/login']);
      this.toastService.sucess('Has finalizado la sesión');
    });
  }
}
