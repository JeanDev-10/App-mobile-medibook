import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { PagoService } from '../../services/pago.service';
import { ToastService } from 'src/app/core/shared/services/toast.service';

@Component({
  selector: 'app-pagos-crear',
  templateUrl: './pagos-crear.page.html',
  styleUrls: ['./pagos-crear.page.scss'],
})
export class PagosCrearPage implements OnInit {

  FormularioPagos!:FormGroup;

  idMedico!:number;
  idCita!:number;

  options: AnimationOptions = {
    path: '/assets/anim/medicina-crear.json',
  };

  constructor(private formBuilder:FormBuilder,private activatedRouter:ActivatedRoute, private pagosService:PagoService,private toastService:ToastService, private router:Router) {



    this.FormularioPagos = this.formBuilder.group({
      'cantidad' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'medico_id' : new FormControl(''),
      'cita_id' : new FormControl('')
    })
   }

  ngOnInit() {
    this.activatedRouter.params.subscribe((params) => {
      this.idCita = params['idCita'];
      this.idMedico = params['idMedico'] // Aquí obtienes el valor del parámetro :id de la URL
    });
  }


  CreatePago(Form:any){
    this.FormularioPagos.patchValue({
      cantidad : Form.cantidad,
      medico_id : this.idMedico,
      cita_id : this.idCita
    });

    debugger;

    this.pagosService.Crear_Pago(this.FormularioPagos.value).subscribe({
      next: (s) =>{
        this.toastService.sucess('Pago Realizado con Exito');
        this.router.navigate(['home'])
      },
      error: (err) =>{
        this.toastService.error('Pago Fallido');
      }
    });
  }
}
