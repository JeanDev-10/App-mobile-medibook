import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';
import { ToastService } from 'src/app/core/shared/services/toast.service';
import { ObservacionService } from '../../services/observacion.service';
import { AuthService } from 'src/app/public/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { CitasService } from '../../services/citas.service';

@Component({
  selector: 'app-observacion-crear',
  templateUrl: './observacion-crear.page.html',
  styleUrls: ['./observacion-crear.page.scss'],
})
export class ObservacionCrearPage implements OnInit {

  options: AnimationOptions = {
    path: '/assets/anim/medicina-crear.json',
  };
  FormularioObservacion!:FormGroup;
  user!:any;
  id!:any;
  constructor(private formBuilder:FormBuilder,private notificacion:ToastService,private observacionService:ObservacionService,private authService:AuthService,private activatedRoute:ActivatedRoute,private cita:CitasService,private router:Router) {
    this.FormularioObservacion = this.formBuilder.group({
      observacion: ['', [Validators.required]],

   })

   this.activatedRoute.params.subscribe((params) => {
    this.id = params['id']; // Aquí obtienes el valor del parámetro :id de la URL
    // Puedes usar this.id como quieras en tu componente

  });

   this.getObservacion();
   this.authService.userInformation().subscribe((data)=>{

    this.user=data.user;

   if(data.user.rol_id==2){
      this.observacionService.obtenerTodos().subscribe((data)=>{
        this.observacion=data.CitaObservacion
      })
    }
  })
  }

  ngOnInit() {

  }
  observacion!:any;
  observacion_id!:any;
  Observacion(form:any){
    if(this.FormularioObservacion.invalid){
      this.notificacion.error('El proceso es incorrecto...');
    }else{

      const observacionData = {
        contenido: form.observacion,
        cita_id:this.id
      };
        this.observacionService.create(observacionData).subscribe((data)=>{
        this.notificacion.sucess('Especialidad creada');
        this.getObservacion();
        this.FormularioObservacion.reset();
        this.router.navigate(['/observacion']);

      })
    }
  }
  getObservacion(){
    this.observacionService.obtenerTodos().subscribe((data) => {
      console.log(data);
      this.observacion = data.CitaObservacion;
  })
}
}

