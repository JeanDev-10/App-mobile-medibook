import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class ObservacionService {
  private readonly api = config.apiUrl;
  constructor(private readonly http:HttpClient) { }
  obtenerTodos(): Observable<any> {
    return this.http.get<any>(`${this.api}observaciones`);
  }

  obtenerUno(id:any): Observable<any> {
    return this.http.get<any>(`${this.api}observaciones/${id}`);
  }
  create(body:any):Observable<any>{
    return this.http.post<any>(`${this.api}observaciones`,body);
  }
  update(body:any,id:any):Observable<any>{
    return this.http.put<any>(`${this.api}observaciones/${id}`,body);
  }
  delete(id:any):Observable<any>{
    return this.http.delete<any>(`${this.api}observaciones/${id}`);
  }
  obtener(): Observable<any> {
    return this.http.get<any>(`${this.api}citas`);
  }
}
