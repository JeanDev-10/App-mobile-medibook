import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-medicamentos-crear',
  templateUrl: './medicamentos-crear.page.html',
  styleUrls: ['./medicamentos-crear.page.scss'],
})
export class MedicamentosCrearPage implements OnInit {

  medicamento = {
    nombre: '',
    dosis: '',
    lapso: '',
    duracion: ''
  };

  submitForm(form: NgForm) {
    if (form.valid) {
      console.log('Formulario válido. Enviando datos:', this.medicamento);
      // Aquí puedes agregar la lógica para enviar los datos a tu servidor
    } else {
      console.log('Formulario inválido. Asegúrate de completar todos los campos.');
      // Puedes mostrar un mensaje de error al usuario o realizar alguna otra acción
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
