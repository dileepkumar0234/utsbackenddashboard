import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }


  validateAllFormFields(fromGroup:FormGroup){

    Object.keys(fromGroup.controls).forEach(field=>{
      const control = fromGroup.get(field); 
      
      if(control instanceof FormControl){
        control.markAsTouched({ onlySelf: true });
      }
      else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
      else if (control instanceof FormArray){
        control.controls.forEach((element:any)=>{
          this.validateAllFormFields(element);
        })
      }
    });
  }
}
