import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';

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
  constructor(private formBuilder:FormBuilder) {
    this.FormularioObservacion = this.formBuilder.group({
      observacion: ['', [Validators.required]],
   })

  }

  ngOnInit() {

  }

  Observacion(form:any){
    if(this.FormularioObservacion.invalid){}
  }

}
