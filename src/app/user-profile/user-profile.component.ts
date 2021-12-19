import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  showEditProfile = false
  selectedProfileTab = ''

  constructor() { }

  ngOnInit(): void {
    this.selectedProfileTab = 'tax-payer'
  }

  profileTab(tabName:string){
    this.selectedProfileTab = tabName
  }

  toggleEditProfile(){
    this.showEditProfile = true
  }

  closeEditProfile(){
    this.showEditProfile = false
  }

}
