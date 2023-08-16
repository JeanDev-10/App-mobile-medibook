import { Component, OnInit } from '@angular/core';
import { DudasService } from '../../services/dudas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/core/shared/services/toast.service';
import { EventEmitterService } from './services/event-emitter.service';

@Component({
  selector: 'app-dudas',
  templateUrl: './dudas.page.html',
  styleUrls: ['./dudas.page.scss'],
})
export class DudasPage implements OnInit {
  reply_duda_id: any = null;
  contenido: any = null;
  dudas: any;
  FormularioObservacion: FormGroup;
  constructor(
    private dudaService: DudasService,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private readonly eventEmitterService: EventEmitterService
  ) {
    this.eventEmitterService.getEvent().subscribe((eve) => {
      if (eve.event === 'REPLY_DUDA_CREATE') {
        this.reply_duda_id = eve.id;
        this.contenido = eve.contenido;
      }
    });
    this.getDudas();
    this.FormularioObservacion = this.formBuilder.group({
      contenido: ['', [Validators.required]],
    });
  }
  addItem(event: any) {
    this.toastService.error('reply');
  }
  create(value: any) {
    if (this.FormularioObservacion.invalid) {
      // Marcar los campos del formulario como tocados para mostrar los mensajes de error
      Object.values(this.FormularioObservacion.controls).forEach((control) =>
        control.markAsTouched()
      );
      return;
    } else {
      if (this.reply_duda_id === null) {
        this.dudaService.create(value).subscribe((data) => {
          this.toastService.sucess('Duda creada!');
          this.getDudas();
          this.FormularioObservacion.reset();
        });
      } else {
        const body = {
          contenido: value.contenido,
          duda_id: this.reply_duda_id,
        };
        this.dudaService.replyDudaCreate(body).subscribe((data) => {
          this.toastService.sucess('Has respondido a una duda!');
          this.FormularioObservacion.reset();
          this.reply_duda_id = null;
          this.contenido = null;
          this.getDudas();
        });
      }
    }
  }
  ngOnInit() {}
  getDudas() {
    this.dudaService.getDudas().subscribe((data: any) => {
      console.log(data);
      this.dudas = data.dudas;
    });
  }
  cancelReply(){
    this.reply_duda_id = null;
    this.contenido = null;

  }
}
