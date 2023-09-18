import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_OF_API = 'http://localhost:8080';

  requestHeader = new HttpHeaders(
    { "No-Auth":"True", 'Content-Type':'application/json' }
  );

  constructor(
    private httpClient: HttpClient,
    private userAuthService: UserAuthService
  ) { }

  public login(loginData:any){
    return this.httpClient.post(this.PATH_OF_API + "/autenticacao", loginData, {headers: this.requestHeader});
  }

  public forUser() {
    return this.httpClient.get(this.PATH_OF_API + '/paraUser', {responseType:"text"});
  }

  public forAdmin() {
    return this.httpClient.get(this.PATH_OF_API + '/paraAdmin', {responseType:"text"});
  }

  public roleMatch(allowedRoles: any[]): boolean {

    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    //console.log('UserService roleMatch: '+userRoles);

    if(userRoles != null && userRoles) {
      for(let i=0; i < userRoles.length; i++) {
        for(let j=0; j < allowedRoles.length; j++) {

          if(userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }

        }
      }
    }
    return isMatch;
  }


}
