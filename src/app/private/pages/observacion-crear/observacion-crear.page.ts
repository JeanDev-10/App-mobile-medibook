import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';
import { ToastService } from 'src/app/core/shared/services/toast.service';
import { ObservacionService } from '../../services/observacion.service';
import { AuthService } from 'src/app/public/services/auth.service';

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
  constructor(private formBuilder:FormBuilder,private notificacion:ToastService,private observacionService:ObservacionService,private authService:AuthService) {
    this.FormularioObservacion = this.formBuilder.group({
      observacion: ['', [Validators.required]],

   })
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
  Observacion(form:any){
    if(this.FormularioObservacion.invalid){
      this.notificacion.error('El proceso es incorrecto...');
    }else{

      const observacionData = {
        contenido: form.observacion,
        

      };
        this.observacionService.create(observacionData).subscribe((data)=>{
        this.notificacion.sucess('Especialidad creada');
        this.getObservacion();
        this.FormularioObservacion.reset();
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

