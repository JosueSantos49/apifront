import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';

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


  login(loginForm: NgForm){
    this.userService.login(loginForm.value).subscribe(
      (resposta:any) => {
        //console.log(resposta.jwtToken);
        //console.log(resposta.user.role);

        this.userAuthService.setRoles(resposta.user.role),
        this.userAuthService.setToken(resposta.jwtToken)

        //console.log(resposta);

        const role = resposta.user.role[0].roleName;

        if(role === 'Admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/user']);
        }
      },
      (erro) => {
        console.log(erro);
      }
    );
  }

}
