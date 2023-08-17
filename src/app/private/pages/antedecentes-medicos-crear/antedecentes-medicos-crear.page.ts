import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';
import { ToastService } from 'src/app/core/shared/services/toast.service';
import { AntecedenteMedicoService } from '../../services/antecedente-medico.service';
import {  Router } from '@angular/router';


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

  constructor(private formBuilder:FormBuilder,private notificacion:ToastService,private antecedenteService:AntecedenteMedicoService,private router:Router) {
    this.FormularioAntecedentes = this.formBuilder.group({
      'condicionMedica' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'alergias' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'cirugiasPrevias' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'tipoSangre' : new FormControl('',[Validators.required]),
      'otrosDatos' : new FormControl('',[Validators.required,Validators.minLength(3)])

    })
    this.getAntecedente();
   }

  ngOnInit() {
  }

  // Create Medicament

  CreateAntecedentes(Form:any){
    console.log(Form);
    if (this.FormularioAntecedentes.invalid) {
      this.notificacion.error('El proceso es incorrecto...');
    } else {

        const antecedenteData = {
          condicion_medica:Form.condicionMedica,
          alergias:Form.alergias,
          cirugias_previas:Form.cirugiasPrevias,
          tipo_sangre:Form.tipoSangre,
          otros_datos:Form.otrosDatos,
        };

        this.antecedenteService.create(antecedenteData).subscribe((data) => {
          this.notificacion.sucess('Antecedente Médico creado');
          this.getAntecedente();
          this.FormularioAntecedentes.reset();
          this.router.navigate(['antedecentes-medicos']);

        });
    }
  }
  antecedente!:any;
  getAntecedente(){
    this.antecedenteService.obtenerTodos().subscribe((data) => {
      console.log(data);
      this.antecedente = data.antecedentes_medicos;
  })
  }
  antecedente_id!:any;
  EditAntecedentes(Form:any){
    this.antecedenteService.update(Form,this.antecedente_id).subscribe((data)=>{
    this.notificacion.sucess('Se actualizo el antecedente');
    this.FormularioAntecedentes.reset();
    this.antecedente_id=null;
    })
  }

}
