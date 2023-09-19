import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles:[]) {
    localStorage.setItem("roles", JSON.stringify(roles));
  }

  public getRoles(): any {

    const item = localStorage.getItem('roles');
    return item ? JSON.parse(item) : [];

  }

  public setToken(jwtToken:string): void {
    localStorage.setItem("jwtToken", jwtToken);
  }

  public getToken(): string {

   let item = localStorage.getItem('jwtToken');
   return item ? JSON.parse(JSON.stringify(item)) : [];

  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    console.log('UserAuthService this.getRoles(): ',this.getRoles());
    console.log('UserAuthService getToken(): ',this.getToken());
    return this.getRoles() && this.getToken();
  }

}
