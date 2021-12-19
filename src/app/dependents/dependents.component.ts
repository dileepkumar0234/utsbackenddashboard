import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-dependents',
  templateUrl: './dependents.component.html',
  styleUrls: ['./dependents.component.scss']
})
export class DependentsComponent implements OnInit {

  showEditProfile = false
  public dependentform: FormGroup;
  public dependentList: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createDependent(): FormGroup {
		return this.fb.group({
			type: ['email', Validators.compose([Validators.required])], // i.e Email, Phone
			name: [null, Validators.compose([Validators.required])], // i.e. Home, Office
			value: [null, Validators.compose([Validators.required, Validators.email])]
		});
	}
  addDependent() {
    this.dependentList.push(this.createDependent());
  }
  removeDependent(index : any) {
    this.dependentList.removeAt(index);
  }
  get dependentsFormGroup() {
    return this.dependentform.get('dependents') as FormArray;
  }
  getContactsFormGroup(index : any): FormGroup {
    const formGroup = this.dependentList.controls[index] as FormGroup;
    return formGroup;
  }

  toggleEditProfile(){
    this.showEditProfile = true
  }
  closeEditProfile(){
    this.showEditProfile = false
  }

}
