import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';
declare function load_select() : any;
declare function get_value(id:any) : any;
declare function onchange_value(event:any) : any;
@Component({
  selector: 'app-set-new-file-number',
  templateUrl: './set-new-file-number.component.html',
  styleUrls: ['./set-new-file-number.component.scss']
})
export class SetNewFileNumberComponent implements OnInit {


  form: FormGroup = new FormGroup({});
  client_id_error = false;
  isSubmitted = false;

  failed : any;
  success : any;
  userList:any;
  constructor(private formBuilder : FormBuilder,
    private apiService : ApiService, private commonService : CommonService) {
    this.form = this.formBuilder.group({
      filenumber: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.getExistingUsers();
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

  get f(){
    return this.form.controls;
  }

  saveProcess()
  {
    this.failed = "";
    this.success = "";
    let val = get_value('client_id_new_file');
    if (this.form.invalid) {
      this.commonService.validateAllFormFields(this.form);
    }
    if (val == undefined || val == null || val == "") {
      this.client_id_error = true;
    } else this.client_id_error = false;
    if (this.form.invalid || this.client_id_error) {
      return;
    }
    let data = {
      'client_id' : val
    }
    data = { ...data, ...this.form.getRawValue()};
    if (confirm("Please confirm"))
    {
      
      this.apiService.postCall('/member/confirmationtoassigningfilenumber', data)
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
          this.failed = "Failed to Assign File number"
        }
      )
    }
  }

}
