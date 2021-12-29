import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'utsuiwebsite';
  
  constructor(public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router)
    {

    }

    ngOnInit() {
        // this.router.navigate(['login']);
    }
}
