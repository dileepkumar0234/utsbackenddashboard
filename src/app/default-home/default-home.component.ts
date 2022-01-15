import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-home',
  templateUrl: './default-home.component.html',
  styleUrls: ['./default-home.component.scss']
})
export class DefaultHomeComponent implements OnInit {

  constructor(private authService : AuthService, public router : Router) { }

  ngOnInit(): void {
    let roleId = localStorage.getItem(environment.role);
    if (roleId == '3')
    {
      this.router.navigate(['/basic-info-pending']);
    }
    else if (roleId == '1') {
      this.router.navigate(['/all-records']);
    }
    else {
      this.authService.logout();
      window.location.reload();
    }
  }

}
