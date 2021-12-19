import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  selectedNavLink = ''

  constructor() { }

  ngOnInit(): void {
  }

  showDropDown(){
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

  captureSelectedNavLink(navLink:string){
    this.selectedNavLink = navLink
  }

}
