import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class CambiarPasswordService {
  private readonly Api:string=config.apiUrl;
  constructor(private readonly httpClient:HttpClient) { }
  changePassword(body:any){
    return this.httpClient.post<any>(`${this.Api}updatePassword`,body);
  }
}
