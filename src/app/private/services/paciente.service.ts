import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { config } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private readonly Api:string=config.apiUrl;
  constructor(private readonly httpClient:HttpClient) { }
  getOnePaciente(id:any){
    return this.httpClient.get<any>(`${this.Api}pacientes/${id}`).pipe(map((res:any)=>res.usuario));
  }
  historialMedico(id:any){
    return this.httpClient.get<any>(`${this.Api}historial-medico/${id}`).pipe(map((res:any)=>res.historial));
  }
  getPacienteInformation(id:any){

    return this.httpClient.get<any>(`${this.Api}pacientes-information/${id}`).pipe(map((res:any)=>res.usuario));
  }
  obtenerPaciente(){
    return this.httpClient.get(`${this.Api}paciente-information`).pipe(map((res:any)=>res.Informacion));
    //metodo para obtener todo relacionado al paciente o medico logeado logica iria aqui
  }

}
