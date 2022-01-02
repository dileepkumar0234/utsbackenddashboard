import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-site-settings',
  templateUrl: './site-settings.component.html',
  styleUrls: ['./site-settings.component.scss']
})
export class SiteSettingsComponent implements OnInit {

  otpForm : FormGroup = new FormGroup({});

  isValid = false;
  inValidOTP = "";
  settingsData : any;
  constructor(private formBuilder : FormBuilder, 
    private apiService : ApiService, private commonService : CommonService) { 
  }

  ngOnInit(): void {
    this.otpForm = this.formBuilder.group({
      otp_setting: ['', [Validators.required]],
    })
    this.getSettings();
  }

  get f(){
    return this.otpForm.controls;
  }

  submitOTP()
  {
    if (this.otpForm.value.otp_setting == this.settingsData.otp_setting)
    {
      this.isValid = true;
    }
    else 
    {
      this.inValidOTP = "Please enter Valid OTP";
    }
  }

  getSettings()
  {
    this.apiService.postCall('/settings/getsettings', {})
    .subscribe(
      res => {
        if (res.settings)
        {
          this.settingsData = res.settings[0]
        }
      },
      error => {
      }
    )
  }
}
