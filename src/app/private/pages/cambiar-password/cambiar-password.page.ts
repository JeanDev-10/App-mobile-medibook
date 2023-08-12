import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/core/shared/services/toast.service';


@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.page.html',
  styleUrls: ['./cambiar-password.page.scss'],
})
export class CambiarPasswordPage implements OnInit {

  FormCambioPass!: FormGroup;

  constructor(private formBuilder: FormBuilder,private notificacion: ToastService) {
  }

  ngOnInit(): void {
    this.buildForm();

  }

  buildForm() {
    this.FormCambioPass = this.formBuilder.group({

      passwordactual: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      passwordnueva: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      confirmarpassword: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    });
  }

  ChangePassword() {
    if (this.FormCambioPass.invalid) {
      this.notificacion.error('Formulario invalido');
      // Realiza acciones si el formulario es inválido
      return;
    } else {

    }
  }
  }

