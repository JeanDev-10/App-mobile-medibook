import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { config } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private readonly Api:string=config.apiUrl;
  constructor(private readonly httpClient:HttpClient) { }
  getAllMedicos(){
    return this.httpClient.get<any>(`${this.Api}user`).pipe(map((res:any)=>res.medicos));
  }
  getOneMedico(id:any){
    return this.httpClient.get<any>(`${this.Api}medicos/${id}`).pipe(map((res:any)=>res.medico));
  }
  getMedicoInformation(id:any){

    return this.httpClient.get<any>(`${this.Api}medicos-information/${id}`).pipe(map((res:any)=>res.usuario));
  }

  obtenerMedico(){
    return this.httpClient.get(`${this.Api}medico-information`).pipe(map((res:any)=>res.Informacion));
    //metodo para obtener todo relacionado al paciente o medico logeado logica iria aqui
  }
}
