import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  
  constructor() { }

  patchValue(fromGroup:FormGroup ,value: {[key: string]: any}, {onlySelf, emitEvent}: {onlySelf?: boolean, emitEvent?: boolean} = {}): void {
    Object.keys(value).forEach(name => {
      if (fromGroup.controls[name]) {
        fromGroup.controls[name].patchValue(value[name], {onlySelf: true, emitEvent});
      }
    });
  }

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
