import { Injectable } from '@angular/core';
import {config} from '../../../config/config'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {

  private readonly Api:string=config.apiUrl;
  constructor(private readonly httpClient:HttpClient) { }

  // Método para crear un medicamento 


  Crear_Medicamento(Form:any){
    return this.httpClient.post(this.Api + "medicamentos",Form);
  }


  // Método para ver un medicamento 

  Ver_Medicamento(idMedicamento:number){
    return this.httpClient.get(this.Api + "medicamentos/" + idMedicamento);
  }


  // Método para actualizar un medicamento

  Actualizar_Medicamento(idMedicamento:number, Form:any){
    return this.httpClient.put(this.Api + "medicamentos/" + idMedicamento,Form);
  }

  // Método para traer todos los medicamento de paciente loguiado

  Traer_Todos_Los_Medicamentos(){
    return this.httpClient.get(this.Api + "paciente-information");
  }

  // Método para eliminar un medico

  Eliminar_Medicamento(idMedico:number){
    return this.httpClient.delete(this.Api + "medicamentos/" + idMedico);
  }
}
