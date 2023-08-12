import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-examenes-medicos-crear',
  templateUrl: './examenes-medicos-crear.page.html',
  styleUrls: ['./examenes-medicos-crear.page.scss'],
})
export class ExamenesMedicosCrearPage implements OnInit {

  FormularioExamenes!:FormGroup;

  options: AnimationOptions = {
    path: '/assets/anim/medicina-crear.json',
  };

  constructor(private formBuilder:FormBuilder) {
    this.FormularioExamenes = this.formBuilder.group({
      'nombre' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'fecha' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'resultado' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      
    })
   }

  ngOnInit() {
  }

  // Create Medicament

  CreateExamen(Form:any){
    console.log(Form);
  }

}
