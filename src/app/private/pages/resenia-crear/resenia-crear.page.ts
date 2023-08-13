import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-resenia-crear',
  templateUrl: './resenia-crear.page.html',
  styleUrls: ['./resenia-crear.page.scss'],
})
export class ReseniaCrearPage implements OnInit {

  FormularioResenia!:FormGroup;

  options: AnimationOptions = {
    path: '/assets/anim/reseña.json',
  };

  constructor(private formBuilder:FormBuilder) {
    this.FormularioResenia = this.formBuilder.group({
      'calificacion' : new FormControl('',Validators.required),
      'comentario_id': new FormControl('',Validators.required),
      'cita_id' : new FormControl('',Validators.required)
    })
   }

  ngOnInit() {
  }

  // Método para llamar al servicio y crear el crear resenia

  CreateResenia(Form:any){
    console.log(Form);
  }

}
