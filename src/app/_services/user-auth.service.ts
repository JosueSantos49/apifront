import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles:[]) {
    localStorage.setItem("roles", JSON.stringify(roles));
  }

  public getRoles(): any[] {
    //return JSON.parse(localStorage.getItem('roles'));

    /**/
    //const item = window.localStorage.getItem(JSON.stringify('roles'));
    const item = localStorage.getItem(JSON.stringify('roles'));
    //console.log('getRoles() item: '+item);
    return item ? JSON.parse(item) : [];
  }

  public setToken(jwtToken:string): void {
    localStorage.setItem("jwtToken", jwtToken);
  }

  public getToken(): string {
   const item = localStorage.getItem(JSON.stringify('jwtToken'));
   //console.log('getToken() item: '+item);
   return item ? JSON.parse(item) : [];
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    //console.log('UserAuthService isLoggedIn(): '+this.getRoles() && this.getToken());
    return this.getRoles() && this.getToken();
  }

}
