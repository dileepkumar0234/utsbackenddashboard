import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-taxpayer-info',
  templateUrl: './taxpayer-info.component.html',
  styleUrls: ['./taxpayer-info.component.scss']
})
export class TaxpayerInfoComponent implements OnInit {

  showEditProfile = false
  public taxInfoForm:FormGroup;

  constructor(public formBuilder:FormBuilder, public commonService:CommonService) {
    this.taxInfoForm = this.formBuilder.group({
      first_name:[null,[Validators.required]],
      last_name:[null,[Validators.required]],
      phone:[null,[Validators.required]],
      email:[null,[Validators.required]]
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
  submitTaxInfo(){
    if(!this.taxInfoForm.valid){
      this.commonService.validateAllFormFields(this.taxInfoForm);
    }
    else{
      console.log("form values",this.taxInfoForm.getRawValue())
    }
  }
}
