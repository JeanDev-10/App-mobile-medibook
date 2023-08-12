import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-medicamentos-crear',
  templateUrl: './medicamentos-crear.page.html',
  styleUrls: ['./medicamentos-crear.page.scss'],
})
export class MedicamentosCrearPage implements OnInit {

  FormularioMedicamentos!:FormGroup;

  options: AnimationOptions = {
    path: '/assets/anim/medicina-crear.json',
  };

  constructor(private formBuilder:FormBuilder) {
    this.FormularioMedicamentos = this.formBuilder.group({
      'nombre' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'dosis' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'lapso' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'duracion' : new FormControl('',[Validators.required,Validators.minLength(3)])
    })
   }

  ngOnInit() {
  }

  // Create Medicament

  CreateMedicament(Form:any){
    console.log(Form);
  }
}
