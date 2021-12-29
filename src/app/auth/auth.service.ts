import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: any;
  constructor() { }
  isAuthenticated() {
    this.token = localStorage.getItem(environment.authToken);
    return this.token != null;
  }

} 
