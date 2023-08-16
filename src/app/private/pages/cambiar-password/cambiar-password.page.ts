import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/core/shared/services/toast.service';
import { CambiarPasswordService } from './services/cambiar-password.service';
import { AuthService } from 'src/app/public/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.page.html',
  styleUrls: ['./cambiar-password.page.scss'],
})
export class CambiarPasswordPage implements OnInit {

  FormCambioPass!: FormGroup;
  isSeePassword!:boolean;
  isSeePasswordnewPassword!:boolean;
  isSeePasswordConfirmationPassword!:boolean;
  constructor(private formBuilder: FormBuilder,private notificacion: ToastService,private readonly contraseniaService:CambiarPasswordService,private toastService:ToastService,private readonly authService:AuthService,private readonly router:Router) {
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

  seePassword(){
    this.isSeePassword=!this.isSeePassword
  }
  seePassword2(){
    this.isSeePasswordnewPassword=!this.isSeePasswordnewPassword
  }
  seePassword3(){
    this.isSeePasswordConfirmationPassword=!this.isSeePasswordConfirmationPassword
  }
  ChangePassword(form:any) {
    if (this.FormCambioPass.invalid) {
      this.notificacion.error('Formulario invalido');
      // Realiza acciones si el formulario es inválido
      return;
    } else {
      const body={
        password:form.passwordactual,
        newPassword:form.passwordnueva,
      }
      this.contraseniaService.changePassword(body).subscribe((data)=>{
        this.authService.deleteToken();
        this.router.navigate(['/login']);
        this.toastService.sucess('Has cambiado la contraseña');
      })
    }
  }
  }

