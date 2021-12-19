import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-info',
  templateUrl: './employer-info.component.html',
  styleUrls: ['./employer-info.component.scss']
})
export class EmployerInfoComponent implements OnInit {

  showEditProfile = false

  constructor() { }

  ngOnInit(): void {
  }

  toggleEditProfile(){
    this.showEditProfile = true
  }

  closeEditProfile(){
    this.showEditProfile = false
  }

}
