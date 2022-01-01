import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-employer-info',
  templateUrl: './employer-info.component.html',
  styleUrls: ['./employer-info.component.scss']
})
export class EmployerInfoComponent implements OnInit {

  @Input() empInfoList : any;

  ngOnInit(): void {
  }

}
