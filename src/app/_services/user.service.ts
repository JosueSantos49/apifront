import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_OF_API = 'http://localhost:8080';

  PATH_API_AUTH = '/api/auth';

  requestHeader = new HttpHeaders(
    { "No-Auth":"True", 'Content-Type':'application/json' }
  );

  constructor(
    private httpClient: HttpClient,
    private userAuthService: UserAuthService
  ) { }

  public login(loginData:any){
    console.log(this.PATH_OF_API + this.PATH_API_AUTH + "/entrar", loginData, {headers: this.requestHeader});
    return this.httpClient.post(this.PATH_OF_API + this.PATH_API_AUTH + "/entrar", loginData, {headers: this.requestHeader});
  }

  public forUser() {
    return this.httpClient.get(this.PATH_OF_API + this.PATH_API_AUTH + '/paraUsuario', {responseType:"text"});
    //return this.httpClient.get(this.PATH_OF_API + this.PATH_API_AUTH + '/paraUsuario', {responseType:"text"});
  }

  public forAdmin() {
    return this.httpClient.get(this.PATH_OF_API + this.PATH_API_AUTH + '/paraAdmin', {responseType:"text"});
  }

  public roleMatch(allowedRoles: any): boolean {

    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if(userRoles != null && userRoles) {

      for(let i=0; i < userRoles.length; i++) {
        console.log('userRoles: ',userRoles);

        for(let j=0; j < allowedRoles.length; j++) {
          //if(userRoles[i].roleName === allowedRoles[j]){}
          console.log('allowedRoles: ',allowedRoles);

          if(allowedRoles.indexOf(userRoles[i].roleName)){
            console.log('roleMatch achou: ',allowedRoles.indexOf(userRoles[i].roleName));
            isMatch = true;
            return isMatch;
          }
          else {
            console.log('roleMatch não achou: ',allowedRoles.indexOf(userRoles[i].roleName));
            return isMatch;
          }

        }
      }
    }
    return isMatch;
  }


}
