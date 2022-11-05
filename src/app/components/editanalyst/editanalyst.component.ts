import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-editanalyst',
  templateUrl: './editanalyst.component.html',
  styleUrls: ['./editanalyst.component.scss']
})
export class EditanalystComponent implements OnInit {
  client_id : any;
  analystinfo : any;
  confirmpasswordflag = false;
  public updateprofileForm:FormGroup;

  failed : any;
  success : any;
  constructor(public formBuilder:FormBuilder,
    public commonService:CommonService,
    public apiService:ApiService,
    private route : ActivatedRoute, private router : Router) {
    this.updateprofileForm = this.formBuilder.group({
      user_name:['',[Validators.required]],
      newpassword:[null,[Validators.required]],
      confirmpassword:[null,[Validators.required]]
    });
  }

  get f(){
    return this.updateprofileForm.controls;
  }

  ngOnInit(): void {
    this.client_id = this.route.snapshot.paramMap.get('id');
    this.getAnalystInfo();
  }

  updateProfile()
  {
    this.failed = "";
    this.success = "";
    // stop here if form is invalid
    this.commonService.validateAllFormFields(this.updateprofileForm);
    if (this.updateprofileForm.invalid) {
      console.log(this.updateprofileForm.getRawValue());
      return;
    }
    this.apiService.postCall('/user/analystprofileupdate',
      {
        analyst_id    : this.client_id,
        username      : this.f.user_name.value,
        newpassword   : this.f.newpassword.value,
        cpassword     : this.f.confirmpassword.value
      }
      )
    .subscribe(
      res => {
        if (res.http_code == 200) {
          this.success = res.status_smessage;
          this.failed = "";
        } else {
          this.failed = "Please try again later.";
          this.success = "";
        }
        setTimeout(() => {
          this.router.navigate(['analystslist']);
        }, 1000);
      },
      error => {
        this.failed = "Please try again later.";
        this.success = "";
      }
    )
  }

  getAnalystInfo()
  {
    this.apiService.postCall('/user/editanalystprofile', {analyst_id : this.client_id})
    .subscribe(
      res => {
        this.analystinfo = res.analystslist[0];
        this.commonService.patchValue(this.updateprofileForm, this.analystinfo);
      },
      error => {

      }
    )
  }
}
