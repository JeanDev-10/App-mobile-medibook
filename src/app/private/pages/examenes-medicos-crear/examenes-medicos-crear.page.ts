import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-examenes-medicos-crear',
  templateUrl: './examenes-medicos-crear.page.html',
  styleUrls: ['./examenes-medicos-crear.page.scss'],
})
export class ExamenesMedicosCrearPage implements OnInit {

  exam = {
    nombre: '',
    fecha: '',
    resultado: ''
  };

  submitForm(form: NgForm) {
    if (form.valid) {
      console.log('Formulario válido. Enviando datos:', this.exam);
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
