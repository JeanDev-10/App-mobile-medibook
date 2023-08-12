import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-examenes-medicos-detalle',
  templateUrl: './examenes-medicos-detalle.page.html',
  styleUrls: ['./examenes-medicos-detalle.page.scss'],
})
export class ExamenesMedicosDetallePage implements OnInit {

  FormularioExamenMedicoDetalle!:FormGroup;

  // Atributo para el estado del formulario

  StateForm:boolean = false;

  constructor(private formBuilder:FormBuilder, private router:Router, private toastController:ToastController) { 
    this.FormularioExamenMedicoDetalle = this.formBuilder.group({
      
      'nombre' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'fecha' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'resultado' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      
    })
  }

  ngOnInit() {
  }
  

  // Método creado para hacer el delete del medicamento
  deleteExamen(){
    this.router.navigate(['examenes-medicos'])
    // Toast de ionic
    this.presentToast('bottom');
  }


  // Se podría mejorar el toast con un diseño mejor

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Examen, Eliminado Correctamente!',
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
  EditExamen(Form:any){
    this.StateForm = true;
  }

}
