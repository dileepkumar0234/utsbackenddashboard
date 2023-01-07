import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin = false;

  role: string = '3';

  userId: any;

  uuId : any;

  taxYear : any;

  luname : any;


  is_p_tax_year : any;

  constructor(private route: ActivatedRoute) { 
    const cpagename = this.route.url
    console.log("URL:"+cpagename);
  }

  isAuthenticated() {

    const loggedIn = localStorage.getItem(environment.user_id);
    if (loggedIn)
      this.isLogin = true;
    else
      this.isLogin = false;

    return this.isLogin;
  }

  login(userId : any, role : string, uuId: any, uname: any)
  {
    this.isLogin = true;
    this.userId = userId;
    this.role = role;
    this.uuId = uuId;
    this.luname = uname;
    
   // if(this.is_p_tax_year==localStorage.getItem(environment.taxYear)){

   // }else{
     // this.is_p_tax_year = localStorage.getItem(environment.taxYear);
   // }
    localStorage.setItem(environment.user_id, userId);
    localStorage.setItem(environment.role, this.role.toString());
    localStorage.setItem(environment.uu_id, uuId);
    localStorage.setItem(environment.luname, uname);

    return of({ success: this.isLogin, role: this.role, userId : userId, uuId : uuId });
  }

  logout() {

    this.isLogin = false;
    this.role = '';
    localStorage.removeItem(environment.user_id);
    localStorage.removeItem(environment.role);
    localStorage.removeItem(environment.uu_id);
    localStorage.removeItem(environment.taxYear);
    localStorage.removeItem(environment.luname)

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

  setTaxYear(year : any)
  {
    localStorage.setItem(environment.taxYear, year);
  }

  getTaxYear()
  {
    this.taxYear = localStorage.getItem(environment.taxYear);
    return this.taxYear;
  }
} 
