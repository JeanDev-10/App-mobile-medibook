import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';
import { TituloService } from '../../services/titulo.service';
import { ToastService } from 'src/app/core/shared/services/toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { EventEmitterService } from '../dudas/services/event-emitter.service';

@Component({
  selector: 'app-titulos-detalle',
  templateUrl: './titulos-detalle.page.html',
  styleUrls: ['./titulos-detalle.page.scss'],
})
export class TitulosDetallePage implements OnInit {
  id!: any;
  FormularioTitulo!: FormGroup;
  editShow!: boolean;
  options: AnimationOptions = {
    path: '/assets/anim/animacion_titulo.json',
  };
  medico_id!: any;
  titulo!: any;
  constructor(
    private formBuid: FormBuilder,
    private tituloService: TituloService,
    private notificacion: ToastService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private eventEmitterService: EventEmitterService
  ) {
    this.FormularioTitulo = this.formBuid.group({
      nombre: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-z\s]+$/),
      ]),
      fecha: ['', [Validators.required]],
    });
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id']; // Aquí obtienes el valor del parámetro :id de la URL
      // Puedes usar this.id como quieras en tu componente
      this.tituloService
        .obtenerUno(this.id)
        .pipe(map((res: any) => res.titulos))
        .subscribe((data) => {
          console.log(data);
          this.medico_id = data.medico_id;
          this.FormularioTitulo.setValue({
            nombre: data.nombre,
            fecha: data.fecha,
          });
          this.titulo = data;
        });
    });
  }

  // Método para llamar al servicio y crear un titulo
  CreateTitle(Form: any) {
    console.log(Form);
    if (this.FormularioTitulo.invalid) {
    }
  }
  edit() {
    this.editShow = true;
  }
  Delete() {
    this.tituloService.delete(this.id).subscribe((data) => {
      this.router.navigate(['/titulos']);
      this.notificacion.sucess('Se elimino el titulo');
      this.eventEmitterService.setEvent({
        event: 'LOAD_TITULOS',
      });
    });
    // Toast de ionic
  }

  Update(Form: any) {
    console.log(Form);
    const body = {
      nombre: Form.nombre,
      fecha: Form.fecha,
    };
    this.tituloService.update(body, this.id).subscribe((data) => {
      this.router.navigate(['/titulos']);
      this.notificacion.sucess('Se actualizo el titulo.');
      this.eventEmitterService.setEvent({
        event: 'LOAD_TITULOS',
      });
      this.FormularioTitulo.reset();
    });
  }
  ngOnInit() {}
}
