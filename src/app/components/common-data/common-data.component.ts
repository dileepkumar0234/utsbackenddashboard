import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-common-data',
  templateUrl: './common-data.component.html',
  styleUrls: ['./common-data.component.scss']
})
export class CommonDataComponent implements OnInit {

  constructor(private router: Router) { }

  currentRoute : any;

  ngOnInit(): void {
    this.currentRoute = this.router.url;
  }

  isBasicInfo()
  {
    return (this.currentRoute === '/basic-info-pending');
  }
}
