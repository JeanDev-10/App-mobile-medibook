import { Component, OnInit } from '@angular/core';
import { ExamenesMedicoService } from 'src/app/private/services/examenes-medico.service';


@Component({
  selector: 'app-card-examenes-medicos',
  templateUrl: './card-examenes-medicos.component.html',
  styleUrls: ['./card-examenes-medicos.component.scss'],
})
export class CardExamenesMedicosComponent  implements OnInit {

  constructor(private examenesMedicos:ExamenesMedicoService) { }

  ExamenesMedicos_Todos:any;

  ngOnInit() {
    this.Obtener_ExamenesMedicos();
  }

  // Todos los examenes medicos del paciente

  Obtener_ExamenesMedicos(){
    this.examenesMedicos.Obtener_Todos_Los_Medicos().subscribe({
      next: (s:any) =>{
        this.ExamenesMedicos_Todos = s.Informacion.examenes_medico
        console.log(this.ExamenesMedicos_Todos);
      }
    })
  }

}
