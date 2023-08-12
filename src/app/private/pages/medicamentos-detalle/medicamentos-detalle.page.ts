import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-medicamentos-detalle',
  templateUrl: './medicamentos-detalle.page.html',
  styleUrls: ['./medicamentos-detalle.page.scss'],
})
export class MedicamentosDetallePage implements OnInit {

  FormularioMedicamentoDetalle!:FormGroup;

  constructor(private formBuilder:FormBuilder, private router:Router, private toastController:ToastController) { 
    this.FormularioMedicamentoDetalle = this.formBuilder.group({
      'nombre' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'dosis' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'lapso' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'duracion' : new FormControl('',[Validators.required,Validators.minLength(3)])
    })
  }

  ngOnInit() {
  }

  // Método creado para hacer el delete del medicamento
  DeleteMedicament(){
    this.router.navigate(['medicamentos'])
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
}
