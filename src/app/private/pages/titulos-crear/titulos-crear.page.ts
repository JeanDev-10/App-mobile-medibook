import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';
import { ToastService } from 'src/app/core/shared/services/toast.service';
import { TituloService } from '../../services/titulo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-titulos-crear',
  templateUrl: './titulos-crear.page.html',
  styleUrls: ['./titulos-crear.page.scss'],
})
export class TitulosCrearPage implements OnInit {

  FormularioTitulo!:FormGroup;

  options: AnimationOptions = {
    path: '/assets/anim/animacion_titulo.json',
  };


  constructor(private formBuid:FormBuilder,private notificacion:ToastService,private tituloService:TituloService,private router:Router) {
    this.FormularioTitulo = this.formBuid.group({
      nombre: ['', [Validators.required,Validators.pattern(/^[A-Za-z\s]+$/)]],
      fecha: ['', [Validators.required]],
    })
    this.getTitulo();
   }

  ngOnInit() {
  }

  // Método para llamar al servicio y crear un titulo
  CreateTitle(Form:any){
    console.log(Form);
    if (this.FormularioTitulo.invalid) {
      this.notificacion.error('El proceso es incorrecto...');
    }else {

        const TituloData = {
          nombre:Form.nombre,
          fecha:Form.fecha,
        };
        this.tituloService.create(TituloData).subscribe((data) => {
          this.notificacion.sucess('Antecedente Médico creado');
          this.getTitulo();
          this.FormularioTitulo.reset();
          this.router.navigate(['']);

        });
    }
  }
  title!:any;
  getTitulo(){
    this.tituloService.obtenerTodos().subscribe((data) => {
      console.log(data);
      this.title = data.titulos;
  })
  }


}
