import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-spouse-info',
  templateUrl: './spouse-info.component.html',
  styleUrls: ['./spouse-info.component.scss']
})
export class SpouseInfoComponent implements OnInit {

  public spouseInfoForm:FormGroup;

  showEditProfile = false

  constructor(public formBuilder:FormBuilder, public commonService:CommonService) {
    this.spouseInfoForm = this.formBuilder.group({
      firstName:[null,[Validators.required]],
      lastName:[null,[Validators.required]],
      ssn:[null,[Validators.required]],
    });
   }

  ngOnInit(): void {
  }

  toggleEditProfile(){
    this.showEditProfile = true
  }

  closeEditProfile(){
    this.showEditProfile = false
  }

  submitSpouseInfo(){
    if(!this.spouseInfoForm.valid){
      this.commonService.validateAllFormFields(this.spouseInfoForm);
    }
    else{
      console.log("form values",this.spouseInfoForm.getRawValue())
    }
  }

}
