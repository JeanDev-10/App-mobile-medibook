import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../../../config/config'

@Injectable({
  providedIn: 'root'
})
export class TituloService {
  private readonly Api:string=config.apiUrl;
  constructor(private readonly httpClient:HttpClient) { }


}
