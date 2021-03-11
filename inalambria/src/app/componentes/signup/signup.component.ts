import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioserviceService } from 'src/app/servicios/usuarioservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  usuario= {
    correo:'',
    password: '',
    nombre: ''
  }

  constructor(private usuarioService:  UsuarioserviceService, private router: Router) { }

  crearUsuario(){
    this.usuarioService.signup(this.usuario).subscribe(
      (res:any)=>{
        Swal.fire({
          title: 'Usuario creado',
          text: 'Su usario fue creado con exito',
          icon: 'success',
          showCancelButton: false,
          confirmButtonText: 'Ok, entendido'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/dashboard'])
          }
        })
       
      }, err=>{
        Swal.fire({
          title: 'Error al crear usuario',
          text: 'Verifica los campos',
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
