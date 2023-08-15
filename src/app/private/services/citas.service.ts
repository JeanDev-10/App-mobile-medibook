import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { config } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private readonly Api:string=config.apiUrl;
  constructor(private readonly httpClient:HttpClient) { }


  create(body:any){
    return this.httpClient.post(`${this.Api}citas`,body);
  }
  update(body:any,id:any){
    return this.httpClient.put(`${this.Api}citas/${id}`,body);
  }
  delete(id:any){
    return this.httpClient.delete(`${this.Api}citas/${id}`);

  }
  show(id:any){
    return this.httpClient.get(`${this.Api}citas/${id}`);
  }
}
