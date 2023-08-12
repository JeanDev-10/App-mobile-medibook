import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-vacunas-detalle',
  templateUrl: './vacunas-detalle.page.html',
  styleUrls: ['./vacunas-detalle.page.scss'],
})
export class VacunasDetallePage implements OnInit {

  StateForm:boolean = false;

  FormularioVacuna!:FormGroup;

  options: AnimationOptions = {
    path: '/assets/anim/vacune_animacion.json',
  };



  constructor(private formBuilder:FormBuilder, private router:Router, private toastController:ToastController) {
    this.FormularioVacuna = this.formBuilder.group({
      nombre : new FormControl('Pfizer',Validators.required),
      fecha: new FormControl('26/03/2020',Validators.required)
    })
   }

  ngOnInit() {
  }

  // Método para Crear una vacuna por el momento lo estoy usando para ver los datos por consola

  EditVacuna(){
    this.ChangeStateForm();
  }

    // Cambiar el estado del formulario

    ChangeStateForm(){
      this.StateForm = !this.StateForm;
    }

  
  // Método creado para hacer el delete del medicamento
  DeleteMedicament(){
    this.router.navigate(['vacunas'])
    // Toast de ionic
    this.presentToast('bottom');
  }


  // Se podría mejorar el toast con un diseño mejor

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Medicamento, Eliminado Correctamente!',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  // Método para actualizar la vacuna
  UpdateMedicament(form:any){
    console.log(form);
  }

}
