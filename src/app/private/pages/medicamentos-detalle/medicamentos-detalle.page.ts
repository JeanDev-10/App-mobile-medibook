import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicamentos-detalle',
  templateUrl: './medicamentos-detalle.page.html',
  styleUrls: ['./medicamentos-detalle.page.scss'],
})
export class MedicamentosDetallePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  editarMedicamento() {
    // Agrega la lógica para redirigir a la página de edición con los datos del examen
  }

  eliminarMedicamento() {
    // Agrega la lógica para eliminar el examen y redirigir a la lista de exámenes
  }
}
