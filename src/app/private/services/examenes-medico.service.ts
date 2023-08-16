import { Injectable } from '@angular/core';
import {config} from '../../../config/config'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamenesMedicoService {

  private readonly Api:string=config.apiUrl;
  constructor(private readonly httpClient:HttpClient) { }

  // Método para ver todos los examenes medicos de un paciente especifico

  Obtener_Todos_Los_Medicos(){
    return this.httpClient.get(this.Api + "paciente-information");
  }

  // Método para crear un examen médico

  Crear_ExamenMedico(Form:any){
    return this.httpClient.post(this.Api + "examenes-medicos",Form); 
  }

  // Método para ver un examen medico 

  Ver_ExamenMedico(idNumber:number){
    return this.httpClient.get(this.Api + "examenes-medicos/" + idNumber);
  }

  // Método para actualizar un examen medico

  Actualizar_ExamenMedico(idNumber:number,Form:any){
    return this.httpClient.put(this.Api + "examenes-medicos/" + idNumber,Form);
  }

  // Método para eliminar un examen medico

  Eliminar_ExamenMedico(idNumber:number){
    return this.httpClient.delete(this.Api + "examenes-medicos/" + idNumber);
  }
}
