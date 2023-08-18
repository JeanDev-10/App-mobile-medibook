import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AntecedenteMedicoService } from '../../services/antecedente-medico.service';
import { ToastService } from 'src/app/core/shared/services/toast.service';
import { map } from 'rxjs';


@Component({
  selector: 'app-antedecentes-medicos-detalle',
  templateUrl: './antedecentes-medicos-detalle.page.html',
  styleUrls: ['./antedecentes-medicos-detalle.page.scss'],
})
export class AntedecentesMedicosDetallePage implements OnInit {

  FormAntecedentesDetalle!:FormGroup;

  // Atributo para el estado del formulario

  StateForm:boolean = false;
  id: any;
  antecedente!:any;
  antecedente_id!:any;
  constructor(private formBuilder:FormBuilder, private router:Router, private toastController:ToastService,private antecedenteService:AntecedenteMedicoService,private activatedRoute:ActivatedRoute) {
    this.FormAntecedentesDetalle = this.formBuilder.group({

      'condicionMedica' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'alergias' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'cirugiasPrevias' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'tipoSangre' : new FormControl('',[Validators.required]),
      'otrosDatos' : new FormControl('',[Validators.required,Validators.minLength(3)])

    })
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id']; // Aquí obtienes el valor del parámetro :id de la URL
      // Puedes usar this.id como quieras en tu componente
      this.antecedenteService
        .obtenerUno(this.id)
        .pipe(map((res: any) => res.antecedentes_medicos))
        .subscribe((data) => {
          console.log(data);
          this.antecedente_id = data.paciente_id;
          this.FormAntecedentesDetalle.setValue({
            condicionMedica: data.condicion_medica,
            alergias: data.alergias,
            cirugiasPrevias: data.cirugias_previas,
            tipoSangre: data.tipo_sangre,
            otrosDatos: data.otros_datos,
          });
          this.antecedente = data;
        });
    });

  }

  ngOnInit() {
  }



  Delete() {
    this.antecedenteService.delete(this.id).subscribe((data)=>{
      this.toastController.sucess('Antecedente Cancelada Correctamente!');
      this.router.navigate(['/antecedentes-medicos']);
    })
    // Toast de ionic
  }

  Update(Form: any) {
    console.log(Form);
    const body={
      condicion_medica:Form.condicionMedica,
      alergias:Form.alergias,
      cirugias_previas:Form.cirugiasPrevias,
      tipo_sangre:Form.tipoSangre,
      otros_datos:Form.otrosDatos,
      paciente_id:this.antecedente_id
    }
    this.antecedenteService.update(body,this.id).subscribe((data)=>{
      this.toastController.sucess('Antecedente Editada Correctamente!');
      this.router.navigate(['/antecedentes-medicos']);
      this.FormAntecedentesDetalle.reset();
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




}
