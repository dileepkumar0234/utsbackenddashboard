import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ApiService } from 'src/app/services/api.service';
import { UserCommentsComponent } from './user-comments/user-comments.component';

@Component({
  selector: 'app-file-status',
  templateUrl: './file-status.component.html',
  styleUrls: ['./file-status.component.scss']
})
export class FileStatusComponent implements OnInit {

  @ViewChild(UserCommentsComponent, {static : true}) userCommentsComponent : UserCommentsComponent;
	
  @Input() currentFileStatus : any;

  processStateForm : FormGroup = new FormGroup({});
  processStatusList : any;
  userId : any;

  client_id : any;

  taxYear : any;

  constructor(private authService : AuthService, private apiService : ApiService, private formBuilder : FormBuilder, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.processStateForm = this.formBuilder.group({
      processstate: ['', [Validators.required]],
      commentmessage: ['', [Validators.required]],
    })
    this.client_id = this.route.snapshot.paramMap.get('id');
    this.userId = this.authService.getUserId();
    this.taxYear = this.authService.getTaxYear();
    this.getProcessingStatusList();
  }

  getProcessingStatusList()
  {
    this.apiService.postCall('/settings/getprocessingstatus', {})
    .subscribe(
      res => {
        if(res.processingstatus)
        {
          this.processStatusList = res.processingstatus;
          if (this.currentFileStatus)
				    this.processStateForm.controls['processstate'].patchValue(this.currentFileStatus.presentfilestatus);
          else
				    this.processStateForm.controls['processstate'].patchValue(this.processStatusList[0].ps_masterid);
        }
      },
      error => {
      }
    )
  }
  get f(){
    return this.processStateForm.controls;
  }

  

  submitComment()
  {
    //if (confirm("Please confirm to change status"))
   // {
      this.apiService.postCall('/member/pushtonewfilestatus', 
      { client_id : this.client_id, 
        processstate : this.processStateForm.getRawValue().processstate, 
        commentmessage : this.processStateForm.getRawValue().commentmessage })
      .subscribe(
        res => {
          // console.log(res);
          this.userCommentsComponent.getTableData();
          this.refresh();
        },
        error => {
        }
      )
    //}
  }
  refresh(): void {
      window.location.reload();
  } 
}
