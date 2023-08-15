import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class AntecedenteMedicoService {

  private readonly api = config.apiUrl;
  constructor(private readonly http:HttpClient) { }
  obtenerTodos(): Observable<any> {
    return this.http.get<any>(`${this.api}antecedentes-medicos`);
  }

  obtenerUno(id:any): Observable<any> {
    return this.http.get<any>(`${this.api}antecedentes-medicos/${id}`);
  }
  create(body:any):Observable<any>{
    return this.http.post<any>(`${this.api}antecedentes-medicos`,body);
  }
  update(body:any,id:any):Observable<any>{
    return this.http.put<any>(`${this.api}antecedentes-medicos/${id}`,body);
  }
  delete(id:any):Observable<any>{
    return this.http.delete<any>(`${this.api}antecedentes-medicos/${id}`);
  }


}
