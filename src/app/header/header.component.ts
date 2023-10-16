import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    public userService: UserService
  ){}

  ngOnInit(): void {
  }

  public estaLogado() {
    //console.log('Está logado: '+this.userAuthService.isLoggedIn());
    return this.userAuthService.isLoggedIn();
  }

  public logout() {
    this.userAuthService.clear();
    let x = this.userAuthService.isLoggedIn();
    x = null;
    this.router.navigate(['/login']);
  }

}
