import { Injectable } from '@angular/core';
import { UsuarioserviceService } from './usuarioservice.service';
import {HttpInterceptor} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenGeneratorService {

  constructor(private usuarioService: UsuarioserviceService) { }

  intercept(req:any, next:any){
    const tokenReq= req.clone({
       setHeaders: {
         Authorization: `Bearer ${this.usuarioService.getToken()}`
       }
     })
     return next.handle(tokenReq)
   }
}
