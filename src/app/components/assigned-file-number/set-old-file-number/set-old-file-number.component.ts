import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-set-old-file-number',
  templateUrl: './set-old-file-number.component.html',
  styleUrls: ['./set-old-file-number.component.scss']
})
export class SetOldFileNumberComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  userList : any;

  isSubmitted = false;

  failed : any;
  success : any;

  constructor(private formBuilder : FormBuilder, 
    private apiService : ApiService, private commonService : CommonService) { 
    this.form = this.formBuilder.group({
      client_id : ['', [Validators.required]],
      filenumber: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.getExistingUsers();
  }
  
  get f(){
    return this.form.controls;
  }
  
  getExistingUsers()
  {
    this.apiService.postCall('/member/existingassignfilenumber', {})
    .subscribe(
      res => {
        if (res.oldusers)
        {
          this.userList = res.oldusers;
        }
          
      },
      error => {

      }
    )
  }

  saveProcess()
  {
    this.failed = "";
    this.success = "";
    if (!this.form.valid)
    {
      this.commonService.validateAllFormFields(this.form);
    }
    if (confirm("Please confirm"))
    {
     
      this.apiService.postCall('/member/confirmationtoassigningfilenumber', this.form.getRawValue())
      .subscribe(
        res => {
        },
        error => {
        }
      )
    }
  }
  
}
