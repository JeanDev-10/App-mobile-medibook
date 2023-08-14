import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastService } from 'src/app/core/shared/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isSeePassword:boolean=false;
  formLogin!:FormGroup

  constructor(private router: Router, private authService: AuthService,
    private formBuilder: FormBuilder,private toastService:ToastService) {
    this.formLogin= this.formBuilder.group({
      email:['', [
        Validators.required,
        Validators.email
        ]],

      password:['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]],
    })
  }

  Login(form: any) {
    if (this.formLogin.invalid) {
      // Marcar los campos del formulario como tocados para mostrar los mensajes de error
      Object.values(this.formLogin.controls).forEach((control) =>
      control.markAsTouched(),
      );
      return;
    } else {
      console.log("hacer peticion")
      this.authService.login(form).subscribe((data) => {
        this.toastService.sucess('Inicio de sesión correctamente');
        this.authService.setToken(data.access_token);
        this.router.navigate(['/home']);
      });
    }
  }
  seePassword(){
    this.isSeePassword=!this.isSeePassword;
  }
  ngOnInit() {}
}
