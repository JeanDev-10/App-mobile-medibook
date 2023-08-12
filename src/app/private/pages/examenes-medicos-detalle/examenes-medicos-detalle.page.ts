import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examenes-medicos-detalle',
  templateUrl: './examenes-medicos-detalle.page.html',
  styleUrls: ['./examenes-medicos-detalle.page.scss'],
})
export class ExamenesMedicosDetallePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  editarExamen() {
    // Agrega la lógica para redirigir a la página de edición con los datos del examen
  }

  eliminarExamen() {
    // Agrega la lógica para eliminar el examen y redirigir a la lista de exámenes
  }
}
