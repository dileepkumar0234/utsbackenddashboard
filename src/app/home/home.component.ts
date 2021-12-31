import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { Role } from '../models/role';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthService, private router : Router) {}

  ngOnInit(): void {
   
  }

  // canShow(roles : any)
  // {
  //   const rols = roles as Role[];
  //   if (rols && !rols.some(r => this.authService.hasRole(r.toString()))) {
  //     return false;
  //   }
  //   return true;
  // }

  get isSuperAdmin() {
    return this.authService.hasRole((Role.SUPER_ADMIN).toString());
  }

  get isAdmin()
  {
    return this.authService.hasRole((Role.ADMIN).toString());
  }
 
  onLogout()
  {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
