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

  constructor(private formBuilder:FormBuilder) {}

   buildForm() {
    this.FormularioCitasMedicas = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      hora_inicio: ['', [Validators.required]],
      hora_fin: ['', [Validators.required]],
      medico_id: ['', [Validators.required]],

    });
  }
  ngOnInit() {
    this.buildForm();
  }


  // Por el momento solo muestro por consola
  CreateCitaMedica(Form:any){
    console.log(Form);
    if(this.FormularioCitasMedicas.invalid){}
  }
}
