import { Component, OnInit } from '@angular/core';
import { AntecedenteMedicoService } from '../../services/antecedente-medico.service';

@Component({
  selector: 'app-antedecentes-medicos',
  templateUrl: './antedecentes-medicos.page.html',
  styleUrls: ['./antedecentes-medicos.page.scss'],
})
export class AntedecentesMedicosPage implements OnInit {

  constructor(private antecedenteService:AntecedenteMedicoService ) {
    
  }

  ngOnInit() {

  }

}
