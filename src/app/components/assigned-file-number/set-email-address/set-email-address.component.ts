import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-set-email-address',
  templateUrl: './set-email-address.component.html',
  styleUrls: ['./set-email-address.component.scss']
})
export class SetEmailAddressComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  userList : any;

  isSubmitted = false;

  failed : any;
  success : any;

  constructor(private formBuilder : FormBuilder, 
    private apiService : ApiService, private commonService : CommonService) { 
    this.form = this.formBuilder.group({
      client_id : ['', [Validators.required]],
      newemailaddr: ['', [Validators.required]],
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
  saveProcess()
  {
  }
}
