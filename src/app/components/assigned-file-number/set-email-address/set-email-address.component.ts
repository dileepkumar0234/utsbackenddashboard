import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';
declare function load_select() : any;
declare function get_value(id:any) : any;
declare function onchange_value(event:any) : any;
@Component({
  selector: 'app-set-email-address',
  templateUrl: './set-email-address.component.html',
  styleUrls: ['./set-email-address.component.scss']
})
export class SetEmailAddressComponent implements OnInit, AfterViewInit {

  @Input() uelist : any;

  form: FormGroup = new FormGroup({});
  client_id_error = false;
  userLists : any;

  isSubmitted = false;

  failed : any;
  success : any;

  constructor(private formBuilder : FormBuilder,
    private apiService : ApiService, private commonService : CommonService) {
    this.form = this.formBuilder.group({
      newemailaddr: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.getExistingUsers();
  }

  ngAfterViewInit(): void {
    load_select();
  }

  getExistingUsers()
  {
    this.apiService.postCall('/member/usersliist', {})
    .subscribe(
      res => {
        if (res.oldusers)
        {
          this.userLists = res.oldusers;
          this.form.reset();
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
    let val = get_value('client_id_email');
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
    this.apiService.postCall('/member/changeemailaddress', data)
    .subscribe(
      res => {
          if (res.status_smessage)
          {
            this.success = res.status_smessage;
            this.getExistingUsers();
          }
      },
      error => {
        this.failed = "Failed to Update. Please try again later."
      }
    )
  }
  get f(){
    return this.form.controls;
  }
}
