import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-antedecentes-medicos-detalle',
  templateUrl: './antedecentes-medicos-detalle.page.html',
  styleUrls: ['./antedecentes-medicos-detalle.page.scss'],
})
export class AntedecentesMedicosDetallePage implements OnInit {

  FormAntecedentesDetalle!:FormGroup;

  // Atributo para el estado del formulario

  StateForm:boolean = false;

  constructor(private formBuilder:FormBuilder, private router:Router, private toastController:ToastController) { 
    this.FormAntecedentesDetalle = this.formBuilder.group({
      
      'condicionMedica' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'alergias' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'cirugiasPrevias' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'tipoSangre' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'otrosDatos' : new FormControl('',[Validators.required,Validators.minLength(3)])
      
    })
  }

  ngOnInit() {
  }
  

  // Método creado para hacer el delete del medicamento
  deleteAntecedentes(){
    this.router.navigate(['antedecentes-medicos'])
    // Toast de ionic
    this.presentToast('bottom');
  }


  // Se podría mejorar el toast con un diseño mejor

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Antecedente Medico, Eliminado Correctamente!',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  // Cambiar el estado del formulario

  ChangeStateForm(){
    this.StateForm = !this.StateForm;
  }

  // Se podría hacer ya el edit método
  EditAntecedentes(Form:any){
    this.StateForm = true;
  }

}
