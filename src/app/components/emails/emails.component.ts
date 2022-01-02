import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../common.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit {

	confirmemailflag = false;
	public sendingEmailForm:FormGroup;
	success_msg : string = '';
	error_msg   : string = '';
	templatesList   : any;

	constructor(public formBuilder:FormBuilder, public commonService:CommonService,public apiService:ApiService){
		this.sendingEmailForm = this.formBuilder.group({
			username:[null,[Validators.required]],
			useremail:[null,[Validators.required]],
			confirmemail:[null,[Validators.required]],
			ettemplateid:[null,[Validators.required]]
		});
	}

	ngOnInit(): void {	
		
		let user_id = localStorage.getItem('access_token');
		var changeData = {"user_id":user_id};
		this.apiService.postCall('/settings/emailtemplates', changeData)
		.subscribe(res => {
			if(res.http_code==200){
				this.templatesList = res.templatesinfo;                 
			}else{
				this.error_msg = res.status_smessage;
			} 
		},
		error =>{
			this.error_msg = error;
		});
	}
	
	submitC(){
		this.confirmemailflag = false;
		if(!this.sendingEmailForm.valid){
		  this.commonService.validateAllFormFields(this.sendingEmailForm);
		}else{
		  let username = this.sendingEmailForm.getRawValue().username;
		  let useremail = this.sendingEmailForm.getRawValue().useremail;
		  let confirmemail = this.sendingEmailForm.getRawValue().confirmemail;
		  let ettemplateid = this.sendingEmailForm.getRawValue().ettemplateid;
		  if(useremail==confirmemail){
			this.confirmemailflag = false;
			let user_id = localStorage.getItem('access_token');
			var changeData = {"user_id":user_id,"clientname":username,"useremail":useremail,"ettemplateid":ettemplateid};   
			this.apiService.postCall('/settings/sendemailtoclient', changeData)
			.subscribe(
				res => {
				  if(res.http_code==200){
					this.success_msg = res.status_smessage;                 
				  }else{
					this.error_msg = res.status_smessage;
				  } 
			  },
			  error => {
				this.error_msg = error;
			  });
		  }else{
			this.confirmemailflag = true;
		  }
		}
	}
}
