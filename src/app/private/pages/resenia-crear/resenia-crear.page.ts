import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { ReseniaService } from '../../services/resenia.service';

@Component({
  selector: 'app-resenia-crear',
  templateUrl: './resenia-crear.page.html',
  styleUrls: ['./resenia-crear.page.scss'],
})
export class ReseniaCrearPage implements OnInit {

  FormularioResenia!:FormGroup;

  options: AnimationOptions = {
    path: '/assets/anim/reseña.json',
  };

  constructor(private formBuilder:FormBuilder, private activatedRouter:ActivatedRoute, private reseniaService:ReseniaService, private router:Router) {
    this.FormularioResenia = this.formBuilder.group({
      'calificacion' : new FormControl('',Validators.required),
      'comentario_id': new FormControl('',Validators.required),
      'cita_id' : new FormControl('')
    })
   }

  idCitaMedica!:number;

  ngOnInit() {
    this.idCitaMedica =  Number(this.activatedRouter.snapshot.paramMap.get('id'));
  }

  // Método para llamar al servicio y crear el crear resenia

  CreateResenia(Form:any){
    this.FormularioResenia.patchValue({
      calificacion : Form.calificacion,
      comentario : Form.comentario_id,
      cita_id : this.idCitaMedica
    })
    debugger;
    this.reseniaService.Crear_Resenia(this.FormularioResenia.value).subscribe({
      next: (s) =>{
        this.router.navigate(['/home']);
      }
    })
  }

}
