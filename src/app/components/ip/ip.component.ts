import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.scss']
})
export class IpComponent implements OnInit {

  submitted = false;
  success = "";
  failed = "";

  ipsForm: FormGroup;

  ipEdit = false;

  currentEditIpId : any;

  ipsList : any;

  ipPattern = "(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";

  constructor(private formBuilder : FormBuilder, 
    private apiService : ApiService, private commonService : CommonService) { }

  ngOnInit(): void {

    this.ipsForm = this.formBuilder.group({
      ipaddress: ['', [Validators.required, Validators.email]],
    })
    this.getIps();
  }

  get ipsF(){
    return this.ipsForm.controls;
  }

  getIps()
  {
    this.apiService.postCall('/settings/getipslist', {})
    .subscribe(
      res => {
        if (res.ipslist)
        {
          this.ipsList = res.ipslist;
        }
      },
      error =>{
      }
    )
  }
  ipUpdate()
  {
    this.submitted = true;
    this.failed = "";
    this.success = "";

    if (this.ipsForm.invalid) {
      return;
    }
    this.apiService.postCall('/settings/updateips', {ipaddress : this.ipsForm.value.ipaddress , ipid : this.currentEditIpId})
    .subscribe(
      res => {
        this.success = res.status_smessage;
        setTimeout(() => {
          this.success = "";
        }, 3000);
        this.submitted = false;
        this.ipUpdateCancel();
        this.getIps()        
      },
      error => {
        this.failed = "Please try again later."
        setTimeout(() => {
          this.failed = "";
        }, 3000);
        this.submitted = false
        this.ipUpdateCancel();
      }
    )
  }
  ipUpdateCancel()
  {
    this.submitted = true;
    this.failed = "";
    this.success = "";
    this.ipEdit = false;
    this.currentEditIpId = "";
    this.ipsForm.reset();
  }

  ipSubmit()
  {
    this.submitted = true;
    this.failed = "";
    this.success = "";

    if (this.ipsForm.invalid) {
      return;
    }

    this.apiService.postCall('/settings/saveips', this.ipsForm.getRawValue())
    .subscribe(
      res => {
        this.success = res.status_smessage;
        setTimeout(() => {
          this.success = "";
        }, 3000);
        this.getIps()        
      },
      error => {
        this.failed = "Please try again later."
        setTimeout(() => {
          this.failed = "";
        }, 3000);
      }
    )
  }

  onIPEdit(listIndex : any, ip : any)
  {
    this.ipEdit = true;
    this.currentEditIpId = ip.ipid;
    this.commonService.patchValue(this.ipsForm, {ipaddress : this.ipsList[listIndex].ipaddress});
  }

  onIPDelete(listIndex : any, ipId : any)
  {
    this.apiService.postCall('/settings/deleteuip', { 'ipid' : ipId.ipid })
    .subscribe(
      res => {
        console.log(res);
        this.ipsList.splice(listIndex, 1);
      },
      error => {
        console.log(error);
      }
    )
    this.getIps();
  }
}
