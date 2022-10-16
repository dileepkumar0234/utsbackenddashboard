import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Role } from 'src/app/models/role';
import { ApiService } from 'src/app/services/api.service';

interface Analyst {
  user_name: string;
  email: string;
  user_id : any
}

@Component({
  selector: 'app-analystslist',
  templateUrl: './analystslist.component.html',
  styleUrls: ['./analystslist.component.scss']
})
export class AnalystslistComponent implements OnInit {

 
  userId : any;
  taxYear : any;
  analysts:Analyst[] = [];

  constructor(private authService: AuthService, private router : Router, private http: HttpClient, private apiService : ApiService) {
    this.userId = this.authService.getUserId();
    this.taxYear = this.authService.getTaxYear();
   }

  ngOnInit(): void {
    this.getExistingUsers();
  }

  getExistingUsers()
  {
    this.apiService.postCall('/member/getanalystusers', {})
    .subscribe(
      res => {
        if (res.analystusers)
        {
          this.analysts = res.analystusers;
        }

      },
      error => {

      }
    )
  }

}
