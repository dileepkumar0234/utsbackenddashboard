import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthService, private router : Router) {}

  ngOnInit(): void {
   
  }

  onLogout()
  {
    localStorage.removeItem(environment.authToken);
    this.router.navigate(['/login']);
  }

}
