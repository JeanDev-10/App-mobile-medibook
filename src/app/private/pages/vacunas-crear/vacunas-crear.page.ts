import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';
import { ToastService } from 'src/app/core/shared/services/toast.service';
import { VacunasService } from '../../services/vacunas.service';
import { Router } from '@angular/router';
import { EventEmitterService } from '../dudas/services/event-emitter.service';

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

  constructor(private formBuilder:FormBuilder,private notificacion:ToastService, private vacunasService:VacunasService, private router:Router,private eventEmitterService:EventEmitterService) {

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

  // Métodos para crear una vacuna
  CreateVacuna(Form:any){
    this.vacunasService.Crear_Vacuna(Form).subscribe({
      next: (s) =>{
        this.eventEmitterService.setEvent({
          event:'LOAD_VACUNAS'
        })
        this.router.navigate(['/vacunas']);
        this.notificacion.sucess('Vacuna Creada Exitosamente.');
      }
    })
  }
}
