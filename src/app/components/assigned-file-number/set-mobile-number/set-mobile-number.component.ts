import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-set-mobile-number',
  templateUrl: './set-mobile-number.component.html',
  styleUrls: ['./set-mobile-number.component.scss']
})
export class SetMobileNumberComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  userList : any;

  isSubmitted = false;

  failed : any;
  success : any;
  isYourIndian = false;
  isFriendIndian = false;
  constructor(private formBuilder : FormBuilder, 
    private apiService : ApiService, private commonService : CommonService) { 
    this.form = this.formBuilder.group({
      client_id : ['', [Validators.required]],
      mobilenumber: ['', [Validators.required]],
      phone_ext:['US',[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.getExistingUsers();
  }
  getExistingUsers()
  {
    this.apiService.postCall('/member/usersliist', {})
    .subscribe(
      res => {
        if (res.oldusers)
        {
          this.userList = res.oldusers;
        }
          
      },
      error => {
        
      }
    )
  }
  get f(){
    return this.form.controls;
  }
  changeFriendCountry(e : any)
  {
    if (e.target.value === "US") {
      this.isFriendIndian = false;
    }
    else this.isFriendIndian = true;
      // this.authService.setTaxYear(e.target.value)
      // this.commonService.refresh();
  }
  saveProcess()
  {
  }
}
