import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin = false;

  role: string = '3';

  userId: any;

  uuId : any;

  constructor() { }

  isAuthenticated() {

    const loggedIn = localStorage.getItem(environment.user_id);
    if (loggedIn)
      this.isLogin = true;
    else
      this.isLogin = false;

    return this.isLogin;
  }

  login(userId : any, role : string, uuId: any)
  {
    this.isLogin = true;
    this.userId = userId;
    this.role = role;
    this.uuId = uuId;

    localStorage.setItem(environment.user_id, userId);
    localStorage.setItem(environment.role, this.role.toString());
    localStorage.setItem(environment.uu_id, uuId);

    return of({ success: this.isLogin, role: this.role, userId : userId, uuId : uuId });
  }

  logout() {

    this.isLogin = false;
    this.role = '';
    localStorage.removeItem(environment.user_id);
    localStorage.removeItem(environment.role);
    localStorage.removeItem(environment.uu_id)

    return of({ success: this.isLogin, role: '', userId : '', uuId : '' });
  }

  getRole() {
    const rol = localStorage.getItem(environment.role);
    if (rol)
    {
      this.role = rol;
    }
    else {
      this.role = "";
    }
    return this.role;
  }

  hasRole(role: string) {
    return this.isAuthenticated() && this.getRole() == role;  
  }
  
  getUserId() {
    this.userId = localStorage.getItem(environment.user_id);
    return this.userId;
  }

  getUUId() {
    this.uuId = localStorage.getItem(environment.uu_id);
    return this.uuId;
  }
} 
