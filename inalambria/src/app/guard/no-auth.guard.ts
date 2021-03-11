import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioserviceService } from '../servicios/usuarioservice.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(private router:Router, private usuarioService: UsuarioserviceService ){}
  canActivate() {
    if(!this.usuarioService.estaLogueado()){
      return true;
    }
    this.router.navigate(['/dashboard'])
    return false;
  }
  
}
