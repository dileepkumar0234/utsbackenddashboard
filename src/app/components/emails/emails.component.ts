import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../common.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit {

	public emailForm : FormGroup;
	public emailsList: FormArray;
	submitted = false;
	success_msg : string = '';
	error_msg   : string = '';
	templatesList   : any;

	constructor(public formBuilder:FormBuilder, public commonService:CommonService,public apiService:ApiService){
		
	}
	ngOnInit(): void {	
		this.getTemplates();
		this.emailForm = this.formBuilder.group({
			ettemplateid :  [null, [Validators.required]],
			emails: this.formBuilder.array([this.createEmailForm()])
		});
		this.emailsList = this.emailForm.get('emails') as FormArray;
	}

	get f() { return this.emailForm.controls; }


	createEmailForm(): FormGroup {
		return this.formBuilder.group({
			userName: [null, [Validators.required]],
			email_id: [null, [Validators.required, Validators.email]],
		});
	}

	addEmailForm() {
		this.emailsList.push(this.createEmailForm());
	}
	
	removeEmail(index : any) {
		this.emailsList.removeAt(index);
	}

	get emailsFormGroup() {
		return this.emailForm.get('emails') as FormArray;
	}

	getValidity(i : any) {
		return (<FormArray>this.emailForm.get('emails')).controls[i].valid;
	}

	getEmailFormGroup(index : any): FormGroup {
		const formGroup = this.emailsList.controls[index] as FormGroup;
		return formGroup;
	}

	getTemplates()
	{
		this.apiService.postCall('/settings/emailtemplates', {})
		.subscribe(
			res => {
				if (res.templatesinfo)
				{
					this.templatesList = res.templatesinfo;     
				}
				this.emailForm.controls['templateId'].patchValue(this.templatesList[0].ettemplateid);
			},
			error => {
			}
		)
	}
	
	Submit()
	{
		this.submitted = true;
		if (!this.emailForm.valid)
		{
			this.commonService.validateAllFormFields(this.emailForm);
			// return;
		}
		console.log(this.emailForm.getRawValue());
	}
	submitC(){
		// this.confirmemailflag = false;
		// if(!this.sendingEmailForm.valid){
		//   this.commonService.validateAllFormFields(this.sendingEmailForm);
		// }else{
		//   let username = this.sendingEmailForm.getRawValue().username;
		//   let useremail = this.sendingEmailForm.getRawValue().useremail;
		//   let confirmemail = this.sendingEmailForm.getRawValue().confirmemail;
		//   let ettemplateid = this.sendingEmailForm.getRawValue().ettemplateid;
		//   if(useremail==confirmemail){
		// 	// this.confirmemailflag = false;
		// 	let user_id = localStorage.getItem('access_token');
		// 	var changeData = {"user_id":user_id,"clientname":username,"useremail":useremail,"ettemplateid":ettemplateid};   
		// 	this.apiService.postCall('/settings/sendemailtoclient', changeData)
		// 	.subscribe(
		// 		res => {
		// 		  if(res.http_code==200){
		// 			this.success_msg = res.status_smessage;                 
		// 		  }else{
		// 			this.error_msg = res.status_smessage;
		// 		  } 
		// 	  },
		// 	  error => {
		// 		this.error_msg = error;
		// 	  });
		//   }else{
		// 	// this.confirmemailflag = true;
		//   }
		// }
	}
}
