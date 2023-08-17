import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';
import { TituloService } from '../../services/titulo.service';
import { ToastService } from 'src/app/core/shared/services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-titulos-detalle',
  templateUrl: './titulos-detalle.page.html',
  styleUrls: ['./titulos-detalle.page.scss'],
})
export class TitulosDetallePage implements OnInit {
  id!: any;
  FormularioTitulo!:FormGroup;
  editShow!:boolean;
  options: AnimationOptions = {
    path: '/assets/anim/animacion_titulo.json',
  };


  constructor(private formBuid:FormBuilder,private tituloService:TituloService,private notificacion:ToastService,private router:Router) {
    this.FormularioTitulo = this.formBuid.group({
      nombre : new FormControl('',[Validators.required,Validators.pattern(/^[A-Za-z\s]+$/)]),
      fecha: ['', [Validators.required]],
    })
   }


  // Método para llamar al servicio y crear un titulo
  CreateTitle(Form:any){
    console.log(Form);
    if (this.FormularioTitulo.invalid) {

    }
  }
  edit(){
  this.editShow=true;
  }
  Delete() {
    this.tituloService.delete(this.id).subscribe((data)=>{
      this.notificacion.sucess('Se elimino el titulo');
      this.router.navigate(['']);
    })
    // Toast de ionic
  }

  Update(Form: any) {
    console.log(Form);
    const body={
      nombre:Form.nombre,
      fecha:Form.fecha,
    }
    this.tituloService.update(body,this.id).subscribe((data)=>{
      this.notificacion.sucess('Se actualizo el titulo.');
      this.router.navigate(['/antecedentes-medicos']);
      this.FormularioTitulo.reset();
    })
  }
  ngOnInit() {
  }


}
