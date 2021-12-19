import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indian-tax-services',
  templateUrl: './indian-tax-services.component.html',
  styleUrls: ['./indian-tax-services.component.scss']
})
export class IndianTaxServicesComponent implements OnInit {

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
