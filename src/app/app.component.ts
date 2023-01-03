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
  currentRoute: string;
  constructor(public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router)
    {
      this.currentRoute = router.url;
      const pagenameurl = this.currentRoute.split('/');
      if(pagenameurl[1]=='emails'){
      }else{
        localStorage.removeItem('emailids');
      }
    }

    ngOnInit() {
        // this.router.navigate(['login']);
    }
}
