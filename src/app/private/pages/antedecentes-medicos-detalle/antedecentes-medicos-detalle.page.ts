import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private formBuilder:FormBuilder, private router:Router, private toastController:ToastService,private antecedenteService:AntecedenteMedicoService,private activatedRoute:ActivatedRoute) {
    this.FormAntecedentesDetalle = this.formBuilder.group({

      'condicionMedica' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'alergias' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'cirugiasPrevias' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'tipoSangre' : new FormControl('',[Validators.required]),
      'otrosDatos' : new FormControl('',[Validators.required,Validators.minLength(3)])

    })


  }

  ngOnInit() {
    this.antecedente_id =  Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.Ver_Antecedente();

  }
  antecedente!:any;


  Ver_Antecedente() {
    this.antecedenteService.obtenerUno(this.antecedente_id).subscribe({
      next : (s:any) =>{
        this.antecedente = s.antecedentes_medicos;
        this.FormAntecedentesDetalle.patchValue({
          condicionMedica: this.antecedente.condicion_medica,
          alergias: this.antecedente.alergias,
          cirugiasPrevias: this.antecedente.cirugias_previas,
          tipoSangre: this.antecedente.tipo_sangre,
          otrosDatos: this.antecedente.otros_datos,

        });
        console.log(this.antecedente);
      }
    })
  }
  // Se podría mejorar el toast con un diseño mejor



  // Cambiar el estado del formulario

  ChangeStateForm(){
    this.StateForm = !this.StateForm;
  }

  // Se podría hacer ya el edit método

  EditAntecedentes(Form:any){

    }

    antecedente_id!:any;
    Update(Form:any){
      debugger;
      this.antecedenteService.update(this.antecedente_id,Form).subscribe({
        next : (s) =>{
          this.toastController.sucess('Se actualizo antecedentes-Medico');
          this.router.navigate(['antecedentes-medicos']);

        }
      })
    }

    // Método creado para hacer el delete del medicamento
    Delete(){
      this.antecedenteService.delete(this.antecedente_id).
      subscribe({
        next: (s) =>{
          debugger;
          this.router.navigate(['antecedentes-medicos'])
          // Toast de ionic
          this.toastController.sucess('Se Elimino antecedentes-Medico');

        }
      })
    }



}
