import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';
import { MedicamentosService } from '../../services/medicamentos.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/shared/services/toast.service';

@Component({
  selector: 'app-medicamentos-crear',
  templateUrl: './medicamentos-crear.page.html',
  styleUrls: ['./medicamentos-crear.page.scss'],
})
export class MedicamentosCrearPage implements OnInit {

  FormularioMedicamentos!:FormGroup;

  options: AnimationOptions = {
    path: '/assets/anim/medicina-crear.json',
  };

  constructor(private formBuilder:FormBuilder, private medicamentosService:MedicamentosService, private toastService:ToastService, private router:Router) {
    this.FormularioMedicamentos = this.formBuilder.group({
      'nombre' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'dosis' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'lapso' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'duracion' : new FormControl('',[Validators.required,Validators.minLength(3)])
    })
   }

  ngOnInit() {
  }

  // Create Medicament

  CreateMedicament(Form:any){
    this.medicamentosService.Crear_Medicamento(Form).subscribe({
      next : (s)=>{
        this.toastService.sucess("Medicamentos Creados Correctamente.");
        this.router.navigate(['/medicamentos']);
      }
    })
  }

}
