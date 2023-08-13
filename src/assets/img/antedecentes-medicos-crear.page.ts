import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-antedecentes-medicos-crear',
  templateUrl: './antedecentes-medicos-crear.page.html',
  styleUrls: ['./antedecentes-medicos-crear.page.scss'],
})
export class AntedecentesMedicosCrearPage implements OnInit {

  FormularioAntecedentes!:FormGroup;

  options: AnimationOptions = {
    path: '/assets/anim/medicina-crear.json',
  };

  constructor(private formBuilder:FormBuilder) {
    this.FormularioAntecedentes = this.formBuilder.group({
      'condicionMedica' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'alergias' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'cirugiasPrevias' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'tipoSangre' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'otrosDatos' : new FormControl('',[Validators.required,Validators.minLength(3)])




    })
   }

  ngOnInit() {
  }

  // Create Medicament

  CreateAntecedentes(Form:any){
    console.log(Form);
  }

}
