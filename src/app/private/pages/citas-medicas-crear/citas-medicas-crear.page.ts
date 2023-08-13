import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-citas-medicas-crear',
  templateUrl: './citas-medicas-crear.page.html',
  styleUrls: ['./citas-medicas-crear.page.scss'],
})
export class CitasMedicasCrearPage implements OnInit {

  FormularioCitasMedicas!:FormGroup;

  options: AnimationOptions = {
    path: '/assets/anim/animacion_reservar-cita.json',
  };

  constructor(private formBuilder:FormBuilder) {
    this.FormularioCitasMedicas = this.formBuilder.group({
      titulo : new FormControl('',Validators.required),
      hora_inicio : new FormControl('',Validators.required),
      hora_fin : new FormControl('',Validators.required),
      medico_id : new FormControl('',Validators.required)
    });
   }

  ngOnInit() {
  }

  // Por el momento solo muestro por consola
  CreateCitaMedica(Form:any){
    console.log(Form);
  }
}
