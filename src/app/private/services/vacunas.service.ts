import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {config} from '../../../config/config'

@Injectable({
  providedIn: 'root'
})
export class VacunasService {

  private readonly Api:string=config.apiUrl;
  constructor(private readonly httpClient:HttpClient) { }

  // Método para acceder a todos las vacunas solo del paciente loguiado

  Todas_Vacunas(){
    return this.httpClient.get(this.Api + "paciente-information");
  }

  // Método para crear una vacuna

  Crear_Vacuna(Form:any){
    return this.httpClient.post(this.Api + "vacunas",Form);
  }

  // Método para ver una vacuna en especifico

  Ver_Vacuna(idNumber:number){
    return this.httpClient.get(this.Api + "vacunas/" + idNumber);
  }

  // Método para actualizar una vacuna

  Actualizar_Vacuna(idNumber:number, FormVacuna:any){
    return this.httpClient.put(this.Api + "vacunas/" + idNumber,FormVacuna);
  }

  // Método para eliminar una vacuna

  Eliminar_Vacuna(idNumber:number){
    return this.httpClient.delete(this.Api + "vacunas/" + idNumber);
  }
}
