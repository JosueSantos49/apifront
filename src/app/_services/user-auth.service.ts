import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles:[]) {
    localStorage.setItem("roles", JSON.stringify(roles));
  }

  public getRoles(): [] {
    const item = window.localStorage.getItem('roles');
    return item ? JSON.parse(item) : [];
  }

  public setToken(jwtToken:string): void {
    localStorage.setItem("jwtToken", jwtToken);
  }

  public getToken(): string {
   const item =window.localStorage.getItem('jwtToken');
   return item ? JSON.parse(item) : [];
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }

}
