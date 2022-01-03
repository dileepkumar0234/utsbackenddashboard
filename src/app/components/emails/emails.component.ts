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
	confirmemailflag   : any;

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
		this.submitted = false;
	}
	
	removeEmail(index : any) {
		this.emailsList.removeAt(index);
		this.submitted = false;
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
				this.emailForm.controls['ettemplateid'].patchValue(this.templatesList[0].ettemplateid);
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
		}else{
			this.confirmemailflag = false;
			let ettemplateid = this.emailForm.getRawValue().ettemplateid;
			var emaillist = this.emailForm.getRawValue().emails;
			var emaillength = emaillist.length;
			var emailSuccessFlag =0;
			if(emaillength>0){
				this.confirmemailflag = false;
				let user_id = localStorage.getItem('access_token');
				var i=0;
				for(i=0;i < emaillength; i++){
					let username = emaillist[i].userName;
					let useremail = emaillist[i].email_id;
					var changeData = {"user_id":user_id,"clientname":username,"useremail":useremail,"ettemplateid":ettemplateid};   
					this.apiService.postCall('/settings/sendemailtoclient', changeData)
					.subscribe(
					res => {
						if(res.http_code==200){
							emailSuccessFlag =1;	
							this.success_msg = "Mails sent successfully."; 						               
						}else{
							emailSuccessFlag =0;
							this.error_msg = "There is an issue while sending mails. Please try later.";  
						} 
						console.log(res);
						this.emailForm.reset();
						this.emailForm.controls['ettemplateid'].patchValue(this.templatesList[0].ettemplateid);
						this.submitted = false;
						setTimeout(() => {
							this.success_msg = "";  
							this.error_msg = "";  
						}, 3000);
					},
					error => {
						this.error_msg = error;
						setTimeout(() => {
							this.success_msg = "";  
							this.error_msg = "";  
						}, 3000);
					});
				}
			}else{
				this.confirmemailflag = false;
			}
		}
	}
}
