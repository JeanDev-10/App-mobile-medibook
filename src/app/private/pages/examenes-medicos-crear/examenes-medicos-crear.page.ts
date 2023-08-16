import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';
import { ExamenesMedicoService } from '../../services/examenes-medico.service';
import { Router } from '@angular/router';


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

  constructor(private formBuilder:FormBuilder,private examenesMedicosService:ExamenesMedicoService, private router:Router) {
    this.FormularioExamenes = this.formBuilder.group({
      'nombre' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'fecha' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'resultado' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      
    })
   }

  ngOnInit() {
  }

  // Método para crear un examen médico

  CreateExamen(Form:any){
    this.examenesMedicosService.Crear_ExamenMedico(Form).subscribe({
      next : (s) =>{
        this.router.navigate(['examenes-medicos']);
      }
    })
  }

}
