import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { config } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly Api:string=config.apiUrl;
  constructor(private readonly httpClient:HttpClient) { }
  getOneUsuario(id:any){
    return this.httpClient.get<any>(`${this.Api}user/${id}`).pipe(map((res:any)=>res.usuario));
  }

}
