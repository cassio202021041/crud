import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  private readonly baseURL = "http://localhost:3000/usuario/";
  LoginUsuario(Objeto:any){
    return this.httpClient.post<any>
    ('${this.baseURL}/criarTokenIdentity/', Objeto);
  }

  constructor( private httpClient: HttpClient) { }
}
