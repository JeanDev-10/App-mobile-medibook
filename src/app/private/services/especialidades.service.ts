import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { config } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class EspecialiadesService {
  private readonly Api:string=config.apiUrl;
  constructor(private readonly httpClient:HttpClient) { }
  getAllEspecialidades(){
    return this.httpClient.get<any>(`${this.Api}especialidades`).pipe(map((res:any)=>res.especialidades));
  }
}
