import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';
import { ToastService } from 'src/app/core/shared/services/toast.service';

@Component({
  selector: 'app-vacunas-crear',
  templateUrl: './vacunas-crear.page.html',
  styleUrls: ['./vacunas-crear.page.scss'],
})
export class VacunasCrearPage implements OnInit {


  FormularioVacuna!:FormGroup;

  options: AnimationOptions = {
    path: '/assets/anim/vacune_animacion.json',
  };

  constructor(private formBuilder:FormBuilder,private notificacion:ToastService) {

   }

   buildForm() {
    this.FormularioVacuna = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      fecha: ['', [Validators.required]],

    });
  }
  ngOnInit() {
    this.buildForm();
  }

  // Métodos para crear una vacuna y lo uso para mostrar los datos del formulario por consola
  CreateVacuna(Form:any){
    console.log(Form);
    if(this.FormularioVacuna.invalid){
      this.notificacion.error("Error al ingresar vacuna");

    }
  }
}
