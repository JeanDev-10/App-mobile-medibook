import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-vacunas-crear',
  templateUrl: './vacunas-crear.page.html',
  styleUrls: ['./vacunas-crear.page.scss'],
})
export class VacunasCrearPage implements OnInit {

  
  FormularioVacuna!:FormGroup;

  options: AnimationOptions = {
    path: '/assets/anim/vacune_animacion.json',
  };

  constructor(private formBuilder:FormBuilder) {
    this.FormularioVacuna = this.formBuilder.group({
      nombre : new FormControl('',Validators.required),
      fecha: new FormControl('',Validators.required)
    })
   }

  ngOnInit() {
  }

  // Métodos para crear una vacuna y lo uso para mostrar los datos del formulario por consola
  CreateVacuna(Form:any){
    console.log(Form);
  }
}
