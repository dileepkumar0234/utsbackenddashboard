import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';
declare function load_select() : any;
@Component({
  selector: 'app-set-email-address',
  templateUrl: './set-email-address.component.html',
  styleUrls: ['./set-email-address.component.scss']
})
export class SetEmailAddressComponent implements OnInit, AfterViewInit {

  @Input() uelist : any;

  form: FormGroup = new FormGroup({});

  userLists : any;

  isSubmitted = false;

  failed : any;
  success : any;

  constructor(private formBuilder : FormBuilder,
    private apiService : ApiService, private commonService : CommonService) {
    this.form = this.formBuilder.group({
      client_id : ['', [Validators.required]],
      newemailaddr: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.getExistingUsers();
  }

  ngAfterViewInit(): void {
    // import('../../../../assets/js/custom.js');
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
    if (this.form.invalid) {
      this.commonService.validateAllFormFields(this.form);
      return;
    }
    this.apiService.postCall('/member/changeemailaddress', this.form.getRawValue())
    .subscribe(
      res => {
          if (res.status_smessage)
          {
            this.success = res.status_smessage;
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
