import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-editanalyst',
  templateUrl: './editanalyst.component.html',
  styleUrls: ['./editanalyst.component.scss']
})
export class EditanalystComponent implements OnInit {
  client_id : any;
  analystinfo : any;
  constructor(private apiService : ApiService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.client_id = this.route.snapshot.paramMap.get('id');
    this.getAnalystInfo();
  }
  getAnalystInfo()
  {
    this.apiService.postCall('/member/taxpayerinfo', {client_id : this.client_id,utype:3})
    .subscribe(
      res => {
        this.analystinfo = res.tinfo;
      },
      error => {
        
      }
    )
  }
}
