import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../../../config/config'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TituloService {
  private readonly api:string=config.apiUrl;
  constructor(private readonly http:HttpClient) { }

  obtenerTodos(): Observable<any> {
    return this.http.get<any>(`${this.api}titulos`);
  }


  obtenerUno(id:any): Observable<any> {
    return this.http.get<any>(`${this.api}titulos/${id}`);
  }
  create(body:any):Observable<any>{
    return this.http.post<any>(`${this.api}titulos`,body);
  }
  update(body:any,id:any):Observable<any>{
    return this.http.put<any>(`${this.api}titulos/${id}`,body);
  }
  delete(id:any):Observable<any>{
    return this.http.delete<any>(`${this.api}titulos/${id}`);
  }
}
