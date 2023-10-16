import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  @ViewChild('sidenav') sidenav: MatSidenav;
  expandido = true;
  mostrarSubMenu: boolean = false;
  estaMostrando = false;
  mostrarSubSubMenu: boolean = false;

  constructor(
    public userService: UserService
  ){}

  movimentoEntrar(){
    if(!this.expandido){
      this.estaMostrando = true;
    }
  }

  movimentoSair(){
    if(!this.expandido){
      this.estaMostrando = false;
    }
  }
}
