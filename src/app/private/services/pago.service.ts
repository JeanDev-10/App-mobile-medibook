import { Injectable } from '@angular/core';
import {config} from '../../../config/config';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PagoService {
  private readonly Api:string=config.apiUrl;
  constructor(private readonly httpClient:HttpClient) { }

  // Método para crear pago

  Crear_Pago(Form:any){
    return this.httpClient.post(this.Api + "pagos",Form);
  }

  // Método para ver un pago

  // Método para ver todos los pagos del paciente o médico

  // Método para eliminar un pago

  // Método para actualizar un pago
}
