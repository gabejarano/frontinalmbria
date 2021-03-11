import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioserviceService {

  URI:string;
  constructor(private http: HttpClient) { 
    this.URI = environment.URI;
  }

  login(usuario:any){
    return this.http.post(`${this.URI}/login`, usuario)
  }

  signup(usuario:any){
    return this.http.post(`${this.URI}/signup`, usuario)
  }

  getToken():string | null {
    return localStorage.getItem('key')
  }

  estaLogueado(){
    if(localStorage.getItem('key')){
      return true;
    }
    return false;
  }

  logOut(){
    localStorage.removeItem("key")
    localStorage.removeItem("nombre")
    localStorage.removeItem("usuarioid")
    location.reload();
  }

}
