import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cita-medicas-detalle',
  templateUrl: './cita-medicas-detalle.page.html',
  styleUrls: ['./cita-medicas-detalle.page.scss'],
})
export class CitaMedicasDetallePage implements OnInit {


  FormCitasMedicasEditar!:FormGroup;

  StateForm = false;

  constructor(private formBuilder:FormBuilder,private router:Router, private toastController:ToastController) {
   }

   buildForm() {
    this.FormCitasMedicasEditar = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      hora_inicio: ['', [Validators.required]],
      hora_fin: ['', [Validators.required]],
      medico_id: ['', [Validators.required]],

    });
  }
  ngOnInit() {
    this.buildForm();
  }
  // Método creado para hacer el delete del medicamento
  DeleteMedicament(){
    this.router.navigate(['citas-medicas'])
    // Toast de ionic
    this.presentToast('bottom');
  }


  // Se podría mejorar el toast con un diseño mejor

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Cita Medica, Eliminado Correctamente!',
      duration: 2000,
      position: position,
    });

    await toast.present();
  }

  // Cambiar el estado del formulario

  ChangeStateForm(){
    this.StateForm = !this.StateForm;
  }

  // Se podría hacer ya el edit método
  EditMecament(){
    this.ChangeStateForm();
  }

  // Método para Actualizar la cita medica por el momento solo se envia los datos por la consola del formulario

  UpdateMedicament(Form:any){
    console.log(Form);
  }

}
