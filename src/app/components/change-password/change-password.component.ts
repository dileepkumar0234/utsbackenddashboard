import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  public passwordForm: FormGroup;
  confirmpasswordflag = false;
  submitted = false;
  success = "";
  failed = "";
  
  constructor(private formBuilder : FormBuilder, private commonService : CommonService, private apiService : ApiService) {

    this.passwordForm = this.formBuilder.group({
      oldpassword: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(4)]],
    },
    {
      validator: this.ConfirmedValidator('password', 'confirmpassword')
    })
   }

  get f() { return this.passwordForm.controls; }


  changePassword()
  {
    this.failed = "";
    this.success = "";
    if (this.passwordForm.invalid) {
      this.commonService.validateAllFormFields(this.passwordForm);
      return;
    }
   
    this.apiService.postCall('/user/changepassword', this.passwordForm.getRawValue())
    .subscribe(
      res => {
        this.passwordForm.reset();
        this.success = res.status_smessage; 
        setTimeout(() => {
          this.success = "";
        }, 4000);
      },
      error => {
        this.failed = "Please try again later."
        setTimeout(() => {
          this.failed = "";
        }, 4000);
      }
    )
  }

  ConfirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
  }

  ngOnInit(): void {
  
  }

}
