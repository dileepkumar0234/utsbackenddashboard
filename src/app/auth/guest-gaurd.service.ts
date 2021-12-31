import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGaurdService {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Promise<boolean> {
    var isAuthenticated = this.authService.isAuthenticated();
    if (isAuthenticated) {
        this.router.navigate(['/']);
    }
    return !isAuthenticated;
  }
}
