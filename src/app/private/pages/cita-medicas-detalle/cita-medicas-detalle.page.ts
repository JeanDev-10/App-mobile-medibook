import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CitasService } from '../../services/citas.service';
import { map } from 'rxjs';
import { ToastService } from 'src/app/core/shared/services/toast.service';

@Component({
  selector: 'app-cita-medicas-detalle',
  templateUrl: './cita-medicas-detalle.page.html',
  styleUrls: ['./cita-medicas-detalle.page.scss'],
})
export class CitaMedicasDetallePage implements OnInit {
  FormCitasMedicasEditar!: FormGroup;

  StateForm = false;
  id: any;
  medico_id!: any;
  cita!: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastController: ToastController,
    private route: ActivatedRoute,
    private citaService: CitasService,
    private toastService:ToastService,
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id']; // Aquí obtienes el valor del parámetro :id de la URL
      // Puedes usar this.id como quieras en tu componente
      this.citaService
        .show(this.id)
        .pipe(map((res: any) => res.cita))
        .subscribe((data) => {
          console.log(data);
          this.medico_id = data.medico_id;
          this.FormCitasMedicasEditar.setValue({
            titulo: data.titulo,
            hora_inicio: data.hora_inicio,
            hora_fin: data.hora_fin,
          });
          this.cita = data;
        });
    });
  }

  buildForm() {
    this.FormCitasMedicasEditar = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      hora_inicio: ['', [Validators.required]],
      hora_fin: ['', [Validators.required]],
    });
  }
  ngOnInit() {
    this.buildForm();
  }
  // Método creado para hacer el delete del medicamento
  DeleteMedicament() {
    this.citaService.delete(this.id).subscribe((data)=>{
      this.toastService.sucess('Cita cancelada correctamente!');
      this.router.navigate(['/citas-medicas']);
    })
    // Toast de ionic
  }

  // Se podría mejorar el toast con un diseño mejor



  // Cambiar el estado del formulario

  ChangeStateForm() {
    this.StateForm = !this.StateForm;
  }

  // Se podría hacer ya el edit método
  EditMecament() {
    this.ChangeStateForm();
  }

  // Método para Actualizar la cita medica por el momento solo se envia los datos por la consola del formulario

  UpdateMedicament(Form: any) {
    console.log(Form);
    const body={
      titulo:Form.titulo,
      hora_inicio:Form.hora_inicio,
      hora_fin:Form.hora_fin,
      medico_id:this.medico_id
    }
    this.citaService.update(body,this.id).subscribe((data)=>{
      this.toastService.sucess('Cita Editada correctamente!');
      this.router.navigate(['/citas-medicas']);
      this.FormCitasMedicasEditar.reset();
    })
  }
}
