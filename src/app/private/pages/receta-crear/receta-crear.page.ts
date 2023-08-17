import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { ToastService } from 'src/app/core/shared/services/toast.service';
import { RecetaService } from '../../services/receta.service';


@Component({
  selector: 'app-receta-crear',
  templateUrl: './receta-crear.page.html',
  styleUrls: ['./receta-crear.page.scss'],
})
export class RecetaCrearPage implements OnInit {

  FormReceta!:FormGroup;
  idCitaMedica!:number;

  options: AnimationOptions = {
    path: '/assets/anim/animacion_receta.json',
  };

  constructor(private formbuilder:FormBuilder, private activatedRouter:ActivatedRoute, private notificacion:ToastService, private recetaService:RecetaService, private router:Router) {
    this.FormReceta = this.formbuilder.group({
      'nombre_medicamento' : new FormControl('',Validators.required),
      'cantidad' : new FormControl('',Validators.required),
      'lapso_tiempo' : new FormControl('',Validators.required),
      'cita_id' : new FormControl('')
    });
   }

  ngOnInit() {
    this.idCitaMedica =  Number(this.activatedRouter.snapshot.paramMap.get('id'));
  }

  // Aqui va la logica para llamar al servicio de crear receta por el momento solo visualizo los datos por la consola

  CreateReceta(FormReceta:any){
    if(this.FormReceta.invalid){
      this.notificacion.error('El proceso es incorrecto...');
    }else{

      const observacionData = {
        nombre_medicamento: FormReceta.nombre_medicamento,
        cantidad: FormReceta.cantidad,
        lapso_tiempo : FormReceta.lapso_tiempo,
        cita_id:this.idCitaMedica
      };
      
      this.recetaService.Crear_Receta(observacionData).subscribe((data)=>{
        this.notificacion.sucess('Receta, Creada!');
        this.FormReceta.reset();
        this.router.navigate(['/citas-medicas']);
    })
  }

}

  
}
