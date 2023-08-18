import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../../services/medico.service';
import { EspecialiadesService } from '../../services/especialidades.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {
  searchTerm: string = '';
  specialtyFilter: string = '';
  especialidades:Observable<any>;
  medicos!:any;
  constructor(private medicoService:MedicoService,private especialidadesService:EspecialiadesService) {
    this.medicoService.getAllMedicos().subscribe((data)=>{
      this.medicos=data;
    })
    this.especialidades=this.especialidadesService.getAllEspecialidades()
   }

  ngOnInit() {
  }
  get filteredItems() {
    return this.medicos?.filter((item:any) =>
      item.usuario.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      item.especialidad.nombre.toLowerCase().includes(this.specialtyFilter.toLowerCase())
    );
  }
  handleRefresh(event:any){
    this.medicoService.getAllMedicos().subscribe((data)=>{
      this.medicos=data;
      event.target.complete();
    })
    this.especialidades=this.especialidadesService.getAllEspecialidades()
  }


}
