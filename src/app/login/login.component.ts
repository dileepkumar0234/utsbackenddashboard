import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiService } from '../services/api.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm:FormGroup;

  submitted = false;
  success = "";
  failed = "";
  constructor(public formBuilder:FormBuilder, public router: Router, private apiService : ApiService, private commonService : CommonService) { 
   
  }

  get f() { return this.loginForm.controls; }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    this.submitted = true;
    this.failed = "";
    this.success = "";
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.apiService.postCall('login/check', this.loginForm.getRawValue())
    .subscribe(
      res => {
          if(res.http_code === 200)
          {
            const accessToken = res.uinfo.user_id;
            this.success = res.status_smessage;
            localStorage.setItem(environment.authToken, accessToken);
            this.router.navigate(['/all-records']);
          }
          else {
            this.failed = res.status_smessage;
          }
      },
      error =>{
        this.failed = "Please try again later."
      }

    )
}
}
