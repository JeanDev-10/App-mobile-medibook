import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-titulos-crear',
  templateUrl: './titulos-crear.page.html',
  styleUrls: ['./titulos-crear.page.scss'],
})
export class TitulosCrearPage implements OnInit {

  FormularioTitulo!:FormGroup;

  options: AnimationOptions = {
    path: '/assets/anim/animacion_titulo.json',
  };


  constructor(private formBuid:FormBuilder) {
    this.FormularioTitulo = this.formBuid.group({
      'nombre' : new FormControl('',[Validators.required,Validators.pattern(/^[A-Za-z\s]+$/)]),
      'fecha' : new FormControl('13/08/2023'),
    })
   }

  ngOnInit() {
  }

  // Método para llamar al servicio y crear un titulo
  CreateTitle(Form:any){
    console.log(Form);
    if (this.FormularioTitulo.invalid) {

    }
  }

}
