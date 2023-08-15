import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AntecedenteMedicoService } from '../../services/antecedente-medico.service';
import { ToastService } from 'src/app/core/shared/services/toast.service';


@Component({
  selector: 'app-antedecentes-medicos-detalle',
  templateUrl: './antedecentes-medicos-detalle.page.html',
  styleUrls: ['./antedecentes-medicos-detalle.page.scss'],
})
export class AntedecentesMedicosDetallePage implements OnInit {

  FormAntecedentesDetalle!:FormGroup;

  // Atributo para el estado del formulario

  StateForm:boolean = false;

  constructor(private formBuilder:FormBuilder, private router:Router, private toastController:ToastService,private antecedenteService:AntecedenteMedicoService) {
    this.FormAntecedentesDetalle = this.formBuilder.group({

      'condicionMedica' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'alergias' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'cirugiasPrevias' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'tipoSangre' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'otrosDatos' : new FormControl('',[Validators.required,Validators.minLength(3)])

    })
    this.getAntecedente();
  }

  ngOnInit() {
  }
  antecedente!:any;
  getAntecedente(){
    this.antecedenteService.obtenerTodos().subscribe((data) => {
      console.log(data);
      this.antecedente = data.antecedentes_medicos;
  })
  }

  // Método creado para hacer el delete del medicamento
  deleteAntecedentes(){
    this.router.navigate(['antedecentes-medicos'])
    // Toast de ionic

  }


  // Se podría mejorar el toast con un diseño mejor



  // Cambiar el estado del formulario

  ChangeStateForm(){
    this.StateForm = !this.StateForm;
  }

  // Se podría hacer ya el edit método

  EditAntecedentes(Form:any){

    }



}
