import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-us-tax-services',
  templateUrl: './us-tax-services.component.html',
  styleUrls: ['./us-tax-services.component.scss']
})
export class UsTaxServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const servicesElement = document.querySelector('.dropdown-toggle')
    if(servicesElement){
      if(servicesElement.classList.contains('show')){
        servicesElement.classList.remove('show')
      }
      else{
        servicesElement.classList.add('show')
      }
    }
    const servicesListElement = document.querySelector('.dropdown-menu')
    if(servicesListElement){
      if(servicesListElement.classList.contains('show')){
        servicesListElement.classList.remove('show')
      }
      else{
        servicesListElement.classList.add('show')
      }
    }
  }

}
