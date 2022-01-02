import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  showEditProfile = false
  selectedProfileTab = ''

  constructor(private route: ActivatedRoute) { 
    this.selectedProfileTab = 'basic-info'
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params.to)
      {
        this.selectedProfileTab = params.to
      }
    });
  }

  profileTab(tabName:string){
    this.selectedProfileTab = tabName
  }

}
