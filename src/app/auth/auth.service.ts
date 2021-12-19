import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() { }


  isAuthenticated() {
    // this.token = sessionStorage.getItem('token');
    // this.token = localStorage.getItem('token');
    // return this.token != null;
    return true;
}
} 
