import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-other-info',
  templateUrl: './other-info.component.html',
  styleUrls: ['./other-info.component.scss']
})
export class OtherInfoComponent implements OnInit {

  empInfoList : any;
  dependentsList : any;
  spouseInfo : any;

  client_id : any;
  constructor(private route : ActivatedRoute, private apiService : ApiService, private commonService : CommonService) { }

  ngOnInit(): void {
    this.client_id = this.route.snapshot.paramMap.get('id');
    this.getSpouseInfo();
    this.getEmployerInfo();
    this.getDependentsInfo();
  }

  isEmptySpouse() {
    return (this.spouseInfo && (Object.keys(this.spouseInfo).length === 0));
  }
  isEmptyEmployerInfo() {
    return (this.empInfoList && (Object.keys(this.empInfoList).length === 0));
  }
  isEmptyDependentsInfo() {
    return (this.dependentsList && (Object.keys(this.dependentsList).length === 0));
  }

  getSpouseInfo()
  {
    this.apiService.postCall('/member/spouseinfo', {client_id : this.client_id })
    .subscribe(
      res => {
        if (res.sinfo)
        {
          this.spouseInfo = res.sinfo;
          console.log(this.spouseInfo);
        }
      },
      error => {
      }
    )
  }
  
  getEmployerInfo()
  {
    this.apiService.postCall('/member/employerinfo', {client_id : this.client_id })
    .subscribe(
      res => {
        if (res.empinfo)
        {
          this.empInfoList = res.empinfo;
        }
      },
      error => {

      }
    )
  }

  getDependentsInfo()
  {
    this.apiService.postCall('/member/dependentinfo', {client_id : this.client_id })
    .subscribe(
      res => {
        if (res.dinfo)
        {
          this.dependentsList = res.dinfo;
        }
      },
      error => {

      }
    )
  }

}
