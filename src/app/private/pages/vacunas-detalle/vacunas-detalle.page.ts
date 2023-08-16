import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AnimationOptions } from 'ngx-lottie';
import { VacunasService } from '../../services/vacunas.service';

@Component({
  selector: 'app-vacunas-detalle',
  templateUrl: './vacunas-detalle.page.html',
  styleUrls: ['./vacunas-detalle.page.scss'],
})
export class VacunasDetallePage implements OnInit {

  StateForm:boolean = false;

  FormularioVacuna!:FormGroup;

  VacunaDetalle:any;

  options: AnimationOptions = {
    path: '/assets/anim/vacune_animacion.json',
  };

  idVacuna:any;



  constructor(private formBuilder:FormBuilder, private router:Router, private toastController:ToastController, private vacunasService:VacunasService, private activatedRouter:ActivatedRoute) {

   }

   buildForm() {
    this.FormularioVacuna = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      fecha: ['', [Validators.required]],

    });
  }
  ngOnInit() {
    this.buildForm();
    this.idVacuna =  Number(this.activatedRouter.snapshot.paramMap.get('id'));
    this.Ver_Vacuna();
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
    this.vacunasService.Eliminar_Vacuna(this.idVacuna).subscribe({
      next: (s) =>{
        this.router.navigate(['vacunas'])
        // Toast de ionic
        this.presentToast('bottom');
      }
    })
  }


  // Se podría mejorar el toast con un diseño mejor

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Vacuna, Eliminado Correctamente!',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  // Método para actualizar la vacuna
  UpdateMedicament(form:any){
    this.vacunasService.Actualizar_Vacuna(this.idVacuna,form).subscribe({
      next: (s) =>{
        this.router.navigate(['/vacunas'])
      }
    })
  }

  // Método para ver vacuna

  Ver_Vacuna(){
    this.vacunasService.Ver_Vacuna(this.idVacuna).subscribe({
      next: (s) =>{
        this.VacunaDetalle = s;
        this.FormularioVacuna.patchValue({
          nombre: this.VacunaDetalle.vacunas.nombre,
          fecha: this.VacunaDetalle.vacunas.fecha,
        });
      }
    })
  }


}
