import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-set-mobile-number',
  templateUrl: './set-mobile-number.component.html',
  styleUrls: ['./set-mobile-number.component.scss']
})
export class SetMobileNumberComponent implements OnInit {

  @Input() list : any;

  form: FormGroup = new FormGroup({});

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
  }

  saveProcess()
  {
    this.failed = "";
    this.success = "";
    if (this.form.invalid) {
      this.commonService.validateAllFormFields(this.form);
      return;
    }
    this.apiService.postCall('/member/changemobilenumber', this.form.getRawValue())
    .subscribe(
      res => {
        if ( res.http_code === 200) {
          if (res.status_smessage)
          {
            this.success = res.status_smessage;
          }
        }
        else {
          if (res.status_smessage)
          {
            this.failed = res.status_smessage;
          }
        }
      },
      error => {
        this.failed = "Failed to Update. Please try again later."
      }
    )
  }
}
