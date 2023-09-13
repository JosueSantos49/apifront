import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_OF_API = 'http://localhost:8080';

  requestHeader = new HttpHeaders(
    { "No-Auth":"True" }
  );

  constructor(
    private httpClient: HttpClient,
    private uUserAuthService: UserAuthService
  ) { }

  public login(loginData:any){
    return this.httpClient.post(this.PATH_OF_API + "/autenticar", loginData, {headers: this.requestHeader});
  }

  public roleMatch(allowedRoles:any): boolean {
    let isMatch = false;
    const userRoles: any = this.uUserAuthService.getRoles();

    if(userRoles != null && userRoles) {
      for(let i=0; i < userRoles.length; i++) {
        for(let j=0; j < allowedRoles.lengt; j++) {

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