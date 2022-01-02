import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  @Input() settingsData : any;
  settingsForm: FormGroup = new FormGroup({});

  success = "";
  processingError = "";
  failed = "";
  urlReg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  INmobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
  USmobNumberPattern = "^((\\+1-?)|0)?[0-9]{10}$";  

  constructor(private formBuilder : FormBuilder, 
    private commonService : CommonService, private apiService : ApiService) { }

  ngOnInit(): void {
    this.settingsForm = this.formBuilder.group({
      site_email: ['', [Validators.required, Validators.email]],
      usphonenumber: ['', [Validators.required, Validators.pattern(this.USmobNumberPattern)]],
      indianphonenumber: ['', [Validators.required, Validators.pattern(this.INmobNumberPattern)]],
      officedays: ['', [Validators.required]],
      officetimings: ['', [Validators.required]],
      corporateoffice: ['', [Validators.required]],
      processingcenter: ['', [Validators.required]],
      fblink: ['', [Validators.required, Validators.pattern(this.urlReg)]],
      twitterlink: ['', [Validators.required, Validators.pattern(this.urlReg)]],
      linkedinlink: ['', [Validators.required, Validators.pattern(this.urlReg)]],
      sitepopupsetting: ['', [Validators.required]],
      siteURL: ['', [Validators.required, Validators.pattern(this.urlReg)]],
      taxyear: ['', [Validators.required]]
    })
      this.commonService.patchValue(this.settingsForm, this.settingsData);
  }

  get f(){
    return this.settingsForm.controls;
  }

  settingsSubmit()
  {
    this.failed = "";
    this.success = "";
    // stop here if form is invalid
    if (this.settingsForm.invalid) {
        return;
    }

    this.apiService.postCall('/settings/savesetting', this.settingsForm.getRawValue())
    .subscribe(
      res => {
        this.success = res.status_smessage;
        setTimeout(() => {
          this.success = "";
        }, 1000);
      },
      error => {
        this.failed = "Please try again later."
        setTimeout(() => {
          this.failed = "";
        }, 1000);
      }
    )
  }

}
