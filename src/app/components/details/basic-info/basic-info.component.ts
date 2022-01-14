import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

  @Input() currentFileStatus : any;
  constructor(private apiService : ApiService, private route : ActivatedRoute) { }

  otherInfo : any;
  client_id : any;

  ngOnInit(): void {
    this.client_id = this.route.snapshot.paramMap.get('id');
    this.getTaxPayerInfo();
    console.log(this.currentFileStatus);
  }
  
  getTaxPayerInfo()
  {
    this.apiService.postCall('/member/taxpayerinfo', {client_id : this.client_id})
    .subscribe(
      res => {
        this.otherInfo = res.tinfo;
      },
      error => {
        
      }
    )
  }
}
