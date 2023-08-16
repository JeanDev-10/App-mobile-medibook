import { Injectable } from '@angular/core';
import {config} from '../../../config/config'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReseniaService {

  private readonly Api:string=config.apiUrl;
  constructor(private readonly httpClient:HttpClient) { }

  // Método para crear una reseña

  Crear_Resenia(Form:any){
    return this.httpClient.post(this.Api + "resenia",Form);
  }
}
