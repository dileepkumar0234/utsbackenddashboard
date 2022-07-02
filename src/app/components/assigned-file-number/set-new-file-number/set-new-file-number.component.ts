import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-set-new-file-number',
  templateUrl: './set-new-file-number.component.html',
  styleUrls: ['./set-new-file-number.component.scss']
})
export class SetNewFileNumberComponent implements OnInit {

  @Input() list : any;

  form: FormGroup = new FormGroup({});

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
  }

  get f(){
    return this.form.controls;
  }

  saveProcess()
  {
    this.failed = "";
    this.success = "";
    if (this.form.invalid) {
      this.commonService.validateAllFormFields(this.form);
      return;
    }
    if (confirm("Please confirm"))
    {

      this.apiService.postCall('/member/confirmationtoassigningfilenumber', this.form.getRawValue())
      .subscribe(
        res => {
          if (res.filestatus)
          {
            this.success = res.filestatus;
          }
        },
        error => {
          this.failed = "Failed to Assign File number"
        }
      )
    }
  }

}
