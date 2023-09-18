import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService,
    private router: Router
  ){}

  ngOnInit(): void {

  }

  login(loginForm: NgForm) {
    this.userService
    .login(loginForm.value)
        .subscribe(
            {
                next: (resposta:any) => {

                  //o objeto só está retornando o token. verificar porque não estpa completo.
                  const values = Object.values(resposta);
                  console.log('values: '+values);

                  console.log('Pegou o token: '+resposta.jwtToken);
                  console.log('Pegou o role: '+resposta.usuario.role);
                  console.log('Pegou o roleNome: '+resposta.usuario.role[0]);
                  console.log('Pegou o usuario: '+resposta.usuario);

                  this.userAuthService.setRoles(resposta.usuario.role),
                  this.userAuthService.setToken(resposta.jwtToken)

                  console.log('Pegou a resposta: '+resposta);

                  const role = resposta.usuario.role[0].roleName;

                  console.log('Role[0]: '+role);

                  if(role === 'Admin') {
                    this.router.navigate(['/admin']);
                  } else {
                    this.router.navigate(['/usuario']);
                  }

                },
                error: (erro) => {
                        alert("Usuário ou Senha inválido(s)!");
                        console.log(erro)
                }
            }
        );
  }

  /**
   login(loginForm: NgForm){

    this.userService
      .login(loginForm.value)
      .subscribe((resposta:any) => {

          console.log('Pegou o token: '+resposta.jwtToken);
          console.log('Pegou o role: '+resposta.usuario.role);

          this.userAuthService.setRoles(resposta.usuario.role),
          this.userAuthService.setToken(resposta.jwtToken)

          console.log('Pegou a resposta: '+resposta);

          const role = resposta.usuario.role[0].roleName;

          console.log('Role[0]: '+role);

          if(role === 'Admin') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/usuario']);
          }
      },
      (erro) => {
        console.log(erro);
      }
    );
  }
   */

}
