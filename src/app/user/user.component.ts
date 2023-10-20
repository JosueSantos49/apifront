import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../_services/user.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  @ViewChild('sidenav') sidenav: MatSidenav;
  expandido = true;
  mostrarSubMenu: boolean = false;
  estaMostrando = false;
  mostrarSubSubMenu: boolean = false;

  mensagem: string | undefined;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.forUser();
  }

  forUser() {
    this.userService.forUser().subscribe(
      resposta => {
        console.log(resposta);
        this.mensagem = resposta;
      },
      (error) => {
        console.log(error)
      }
    );
  }

  /*
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
  */



}
