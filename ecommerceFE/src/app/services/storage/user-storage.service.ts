import { Injectable } from '@angular/core';


const TOKEN = "ecomm-token";
const USER = "ecomm-user";

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN);
  }

  public saveUser(user: any): void {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.localStorage.getItem(USER);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  public getUserRole() {
    const user = this.getUser();
    if(user == null) {
      return '';
    }
    return user.role;
  }

  public getUserId() {
    const user = this.getUser();
    if(user == null) {
      return '';
    }
    return user.id;
  }

  public isAdminLoggedIn(): boolean {
    const user = this.getUser();
    if(user == null) {
      return false;
    }
    return user.role === 'ADMIN';
  }

  public isCustomerLoggedIn(): boolean {
    const user = this.getUser();
    if(user == null) {
      return false;
    }
    return user.role === 'CUSTOMER';
  }

  public signOut(): void {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
  }
}
