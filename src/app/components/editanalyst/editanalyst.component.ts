import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(public formBuilder:FormBuilder, public commonService:CommonService,public apiService:ApiService,private route : ActivatedRoute) {
    this.updateprofileForm = this.formBuilder.group({
      user_name:['',[Validators.required]],
      newpassword:[null,[Validators.required]],
      confirmpassword:[null,[Validators.required]]
    });
  }

  ngOnInit(): void {
    this.client_id = this.route.snapshot.paramMap.get('id');
    this.getAnalystInfo();
  }
  updateProfile()
  {
    this.confirmpasswordflag = false;
    if(!this.updateprofileForm.valid){
      this.commonService.validateAllFormFields(this.updateprofileForm);
    }

  }
  getAnalystInfo()
  {
    this.apiService.postCall('/member/taxpayerinfo', {client_id : this.client_id,utype:3})
    .subscribe(
      res => {
        this.analystinfo = res.tinfo;
      },
      error => {
        
      }
    )
  }
}
