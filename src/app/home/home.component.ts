import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { Role } from '../models/role';
import { ApiService } from '../services/api.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  yearForm : FormGroup;
  selectedYear : any;
  years : any;
  taxYear : any;
  countData : any;
  allUsersCount : any;
  currentRoute: string;
  constructor(private commonService : CommonService, private fb : FormBuilder, private apiService : ApiService, public authService: AuthService, private router : Router) {
      this.currentRoute = router.url;
      const pagenameurl = this.currentRoute.split('/');
      if(pagenameurl[1]=='emails'){
        // localStorage.removeItem('emailids');
      }else{
        localStorage.removeItem('emailids');
      }
      if(pagenameurl[1]=='details'){
        const filestatusflag = localStorage.getItem(environment.changefilestatusflag);
        if(filestatusflag!='1'){
          localStorage.removeItem(environment.changefilestatusflag)
        }
      }else{
          localStorage.removeItem(environment.changefilestatusflag)
      }      
  }

  ngOnInit(): void {
    this.getYears();
    this.yearForm = this.fb.group({
      yearControl: [this.selectedYear]
    });
  }

  getCount()
  {
    this.apiService.postCall("/member/commonprocessingcount", {taxYear : this.selectedYear})
    .subscribe(
      res => {
        if (res.recordsTotal)
          this.countData = res.recordsTotal
      },
      error => {
        console.log(error);
      }
    )

    this.apiService.postCall('/member/alluserscount', {taxYear : this.selectedYear})
    .subscribe(
      res => {
        if (res.recordsTotal)
          this.allUsersCount = res.recordsTotal
      },
      error => {
        console.log(error);
      }
    )
  }

  


  getRecord(fileNo : any)
  {
    if (this.countData != null)
    {
      var obj = this.countData.filter((x : any) => x.filestate === fileNo);
      return obj[0].fcount;
    }
    return 0;
  }

  getLogo()
  {
    return environment.logo;
  }
  getProfile()
  {
    return environment.profile;
  }


  changeYear(e : any)
  {
      this.authService.setTaxYear(e.target.value)
      // this.commonService.refresh();
      this.router.navigate(['/']);
  }

  getYears()
  {
    this.apiService.postCall('/member/utstaxyears', {})
    .subscribe(
      res => {
        if (res.taxyears)
        {
          this.years = res.taxyears; 
          res.taxyears.forEach((year : any, index : any) => {
            if (this.authService.getTaxYear())
            {
              if (this.authService.getTaxYear() == year.utstaxyear)
              {
                this.selectedYear = year.utstaxyear;
              }
            }
            else {
              this.selectedYear = year.utstaxyear;
            }
          });
          this.authService.setTaxYear(this.selectedYear)
          this.getCount();
          this.yearForm.controls['yearControl'].patchValue(this.selectedYear);
        }
      },
      error => {
      }
    )
  }

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
