import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin = false;

  roleAs: any;

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

  login(userId : any, roleId : any, uuId: any)
  {
    this.isLogin = true;
    this.userId = userId;
    this.roleAs = roleId;
    this.uuId = uuId;

    localStorage.setItem(environment.user_id, userId);
    localStorage.setItem(environment.role_id, this.roleAs);
    localStorage.setItem(environment.uu_id, uuId);

    return of({ success: this.isLogin, role: this.roleAs, userId : userId, uuId : uuId });
  }

  logout() {

    this.isLogin = false;
    this.roleAs = '';
     localStorage.removeItem(environment.user_id);
    localStorage.removeItem(environment.role_id);
    localStorage.removeItem(environment.uu_id)

    return of({ success: this.isLogin, role: '', userId : '', uuId : '' });
  }

  getRole() {
    this.roleAs = localStorage.getItem(environment.role_id);
    return this.roleAs;
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
