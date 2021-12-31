import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
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
  constructor(public formBuilder:FormBuilder, 
    public router: Router, 
    private apiService : ApiService, 
    private commonService : CommonService,
    private authService: AuthService) { 
   
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
            const userId = res.uinfo.user_id;
            const roleId = res.uinfo.user_type_id;
            const uuId = res.uinfo.uu_id ? res.uinfo.uu_id : '';
            this.authService.login(userId, roleId, uuId)
            this.success = res.status_smessage;
            this.router.navigate(['/']);
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
