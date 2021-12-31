import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Role } from '../models/role';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Promise<boolean> {

    if (!this.authService.isAuthenticated()) {
        this.router.navigate(['login']);
        return false;
    }
    const roles = route.data.roles as Role[];
    console.log(roles);
    if (roles && !roles.some(r => this.authService.hasRole(r.toString()))) {
        this.router.navigate(['error', 'not-found']);
        return false;
    }
    return true;

    var isAuthenticated = this.authService.isAuthenticated();
    if (!isAuthenticated) {
        this.router.navigate(['/login']);
    }
    return isAuthenticated;
  }

}
