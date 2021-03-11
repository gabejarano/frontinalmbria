import { Component, OnInit } from '@angular/core';
import { UsuarioserviceService } from 'src/app/servicios/usuarioservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usuario:string="";
  constructor(private usuarioService: UsuarioserviceService) { }

  logOut(){
    this.usuarioService.logOut();
  }


  ngOnInit(): void {
    this.usuario = localStorage.getItem('nombre')?.toString() || "";
  }


}
