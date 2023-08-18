import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { MedicoService } from '../../services/medico.service';
import { AuthService } from 'src/app/public/services/auth.service';

@Component({
  selector: 'app-profile-medico',
  templateUrl: './profile-medico.page.html',
  styleUrls: ['./profile-medico.page.scss'],
})
export class ProfileMedicoPage implements OnInit {
  medico:any
  id:any
  user:any
  constructor(private route: ActivatedRoute,private medicoService:MedicoService,private authService:AuthService) {
    this.route.params.subscribe(params => {
      this.id = params['id']; // Aquí obtienes el valor del parámetro :id de la URL
      // Puedes usar this.id como quieras en tu componente
      this.medicoService.getOneMedico(this.id).subscribe((medico)=>{
        console.log(medico)
        this.medico=medico;
      })
    });
    this.authService.userInformation().subscribe((data)=>{
      this.user=data;
    })
   }

  ngOnInit() {
  }

}
