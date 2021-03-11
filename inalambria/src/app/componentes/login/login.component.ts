import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioserviceService } from 'src/app/servicios/usuarioservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login= {
    correo:'',
    password: ''
  }

  constructor(private usuarioService:  UsuarioserviceService, private router: Router) { }

  Authentication(){
    this.usuarioService.login(this.login).subscribe(
      (res:any)=>{
        localStorage.setItem('key', res.token)
        localStorage.setItem('usuarioid', res.usuarioid)
        localStorage.setItem('nombre', res.nombre)
        this.router.navigate(['/dashboard'])
      }, err=>{
        Swal.fire({
          title: 'Error al inciar sesión',
          text: 'Credenciales incorrectas',
          icon: 'error',
          showCancelButton: false,
          confirmButtonText: 'Ok, entendido'
        })
      }
    )
  }

  ngOnInit(): void {
  }

}
