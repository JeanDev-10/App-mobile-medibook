import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class TituloService {
  Api:string=config.apiUrl;
  constructor(private readonly httpClient:HttpClientModule) { }
}
