import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  public contactInfoForm:FormGroup;
  
  constructor(public formBuilder:FormBuilder, public commonService:CommonService) {
    this.contactInfoForm = this.formBuilder.group({
      c_name:[null,[Validators.required]],
      c_email:[null,[Validators.required]],
      c_phone:[null,[Validators.required]],
      c_message:[null,[Validators.required]],
    });
   }

  ngOnInit(): void {
  }
  submitContactInfo(){
    if(!this.contactInfoForm.valid){
      this.commonService.validateAllFormFields(this.contactInfoForm);
    }
    else{
      console.log("form values",this.contactInfoForm.getRawValue())
    }
  }
}
