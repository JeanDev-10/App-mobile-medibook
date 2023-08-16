import { Injectable } from '@angular/core';
import {config} from '../../../config/config'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  private readonly Api:string=config.apiUrl;
  constructor(private readonly httpClient:HttpClient) { }

  // Método para crear una receta 

  Crear_Receta(Form:any){
    return this.httpClient.post(this.Api + "recetas",Form);
  }
}
