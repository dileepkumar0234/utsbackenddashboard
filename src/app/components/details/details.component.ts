import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  showEditProfile = false
  selectedProfileTab = ''

  constructor() { }

  ngOnInit(): void {
    this.selectedProfileTab = 'basic-info'
  }

  profileTab(tabName:string){
    this.selectedProfileTab = tabName
  }

}
