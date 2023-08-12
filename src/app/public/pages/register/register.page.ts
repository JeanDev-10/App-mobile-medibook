import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formRegister!:FormGroup

  provincias_array = ['Azuay','Bolívar','Cañar','Carchi','Chimborazo','Cotopaxi','El Oro','Esmeraldas','Galápagos','Guayas','Imbabura','Loja','Los Ríos','Manabí','M. Santiago','Napo','Orellana','Pastaza','Pichincha','Santa Elena','S.D. de los Tsáchilas','Sucumbios','Tungurahua','Zamora Chinchipe']


  canton_array = [
    'Cantón Portoviejo','Cantón 24 de Mayo','Cantón Bolívar','Cantón Chone','Cantón El Carmen',
    'Cantón Flavio Alfaro','Cantón Jama','Cantón Jaramijó','Cantón Jipijapa','Cantón Junín',
    'Cantón Manta','Cantón Montecristi','Cantón Olmedo','Cantón Paján','Cantón Pedernales',
    'Cantón Pichincha','Cantón Puerto López','Cantón Rocafuerte',
    'Cantón San Vicente','Cantón Santa Ana','Cantón Sucre','Cantón Tosagua'
  ];

  constructor(private router: Router, private authService: AuthService,
    private formBuilder: FormBuilder) {
    this.formRegister = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],

      nombre:['',[Validators.required,Validators.minLength(3)]],
      apellido: ['',[Validators.required,Validators.minLength(3)]],
      
      edad: ['', [Validators.required, Validators.pattern(/^-?(1|[1-9]\d*)?$/)]],
      ci: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      telefono: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      fecha: ['', Validators.required],

      canton: ['', [Validators.required, Validators.minLength(3)]],
      'provincia' : ['', [Validators.required, Validators.minLength(3)]]
      
    })
  }

  Register(form: any) {
    if (this.formRegister.invalid) {
      // Marcar los campos del formulario como tocados para mostrar los mensajes de error
      Object.values(this.formRegister.controls).forEach((control) =>
      control.markAsTouched(),
      );
      return;
    } else {
      this.authService.login(form).subscribe((data) => {
        this.authService.setToken(data.access_token);
        this.router.navigate(['patient/home']);
      });
    }
  }
  
  ngOnInit() {}
}
