import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-spouse-info',
  templateUrl: './spouse-info.component.html',
  styleUrls: ['./spouse-info.component.scss']
})
export class SpouseInfoComponent implements OnInit {

  @Input() spouseInfo : any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.spouseInfo);
  }

  
}
