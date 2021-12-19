import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-refer-friend',
  templateUrl: './refer-friend.component.html',
  styleUrls: ['./refer-friend.component.scss']
})
export class ReferFriendComponent implements OnInit {
  public refferalInfoForm:FormGroup;
  constructor(public formBuilder:FormBuilder, public commonService:CommonService) {
    this.refferalInfoForm = this.formBuilder.group({
      rf_on_name:[null,[Validators.required]],
      rf_on_email:[null,[Validators.required]],
      rf_on_phone:[null,[Validators.required]],
      rf_name:[null,[Validators.required]],
      rf_email:[null,[Validators.required]],
      rf_phone:[null,[Validators.required]],
      rf_comment:[null,[Validators.required]],
    });
   }

  ngOnInit(): void {
  }
  submitRefferalInfo(){
    if(!this.refferalInfoForm.valid){
      this.commonService.validateAllFormFields(this.refferalInfoForm);
    }
    else{
      console.log("form values",this.refferalInfoForm.getRawValue())
    }
  }
}
