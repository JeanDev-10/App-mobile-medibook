import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-receta-crear',
  templateUrl: './receta-crear.page.html',
  styleUrls: ['./receta-crear.page.scss'],
})
export class RecetaCrearPage implements OnInit {

  FormReceta!:FormGroup;

  options: AnimationOptions = {
    path: '/assets/anim/animacion_receta.json',
  };

  constructor(private formbuilder:FormBuilder) {
    this.FormReceta = this.formbuilder.group({
      'nombre_medicamento' : new FormControl('',Validators.required),
      'cantidad' : new FormControl('',Validators.required),
      'lapso_tiempo' : new FormControl('',Validators.required),
      'cita_id' : new FormControl('',Validators.required)
    });
   }

  ngOnInit() {
  }

  // Aqui va la logica para llamar al servicio de crear receta por el momento solo visualizo los datos por la consola

  CreateReceta(FormReceta:any){
    console.log(FormReceta);
    if(this.FormReceta.invalid){}
  }
}
