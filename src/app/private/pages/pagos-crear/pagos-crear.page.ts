import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-pagos-crear',
  templateUrl: './pagos-crear.page.html',
  styleUrls: ['./pagos-crear.page.scss'],
})
export class PagosCrearPage implements OnInit {

  FormularioPagos!:FormGroup;

  options: AnimationOptions = {
    path: '/assets/anim/medicina-crear.json',
  };

  constructor(private formBuilder:FormBuilder) {
    this.FormularioPagos = this.formBuilder.group({
      'cantidad' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      
      
    })
   }

  ngOnInit() {
  }


  CreatePago(Form:any){
    console.log(Form);
  }
}
