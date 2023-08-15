import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { CitasService } from '../../services/citas.service';
import { ToastService } from 'src/app/core/shared/services/toast.service';

@Component({
  selector: 'app-citas-medicas-crear',
  templateUrl: './citas-medicas-crear.page.html',
  styleUrls: ['./citas-medicas-crear.page.scss'],
})
export class CitasMedicasCrearPage implements OnInit {
  cita_medica_id:any
  historial:any
  FormularioCitasMedicas!:FormGroup;

  options: AnimationOptions = {
    path: '/assets/anim/animacion_reservar-cita.json',
  };

  constructor(private formBuilder:FormBuilder,private route: ActivatedRoute,private citaService:CitasService,private toastService:ToastService,private router:Router) {
    this.route.params.subscribe(params => {
      this.cita_medica_id = params['id']; // Aquí obtienes el valor del parámetro :id de la URL
      // Puedes usar this.id como quieras en tu componente

    });
  }





   buildForm() {
    this.FormularioCitasMedicas = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      hora_inicio: ['', [Validators.required]],
      hora_fin: ['', [Validators.required]],

    });
  }
  ngOnInit() {
    this.buildForm();
  }


  // Por el momento solo muestro por consola
  CreateCitaMedica(Form:any){
    if(this.FormularioCitasMedicas.invalid){
      Object.values(this.FormularioCitasMedicas.controls).forEach((control) =>
      control.markAsTouched(),
      );
    }else{
      console.log(Form);
      const body={
        titulo:Form.titulo,
        hora_inicio:Form.hora_inicio,
        hora_fin:Form.hora_fin,
        medico_id:this.cita_medica_id
      }
      this.citaService.create(body).subscribe((data)=>{
        this.FormularioCitasMedicas.reset()
        this.router.navigate(['/citas-medicas']);
        this.toastService.sucess('Cita agendada correctamente!');
      })
    }
  }
}
