import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/auth/auth.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  showEditProfile = false
  selectedProfileTab = ''
  client_id : any;
  taxyear : any;

  canShow = false;
  currentFileStatus : any;

  constructor(private route: ActivatedRoute, private apiService : ApiService, private authService : AuthService) { 
    this.selectedProfileTab = 'basic-info'
    this.client_id = this.route.snapshot.paramMap.get('id');
    this.taxyear = this.authService.getTaxYear();
  }

  ngOnInit(): void {
    const filestatusflag = localStorage.getItem(environment.changefilestatusflag);
    if(filestatusflag=='1'){
        this.selectedProfileTab = 'file-status'
    }
    this.route.queryParams.subscribe(params => {
      if (params.to)
      {
        this.selectedProfileTab = params.to
      }
    });
    this.getCurrentFileStatus();
  }

  getCurrentFileStatus()
  {
    this.apiService.postCall('/member/currentfileststus', {client_id : this.client_id, taxyear : this.taxyear})
    .subscribe(
      res => {
        if (res.http_code == 200)
        {
          this.currentFileStatus = res;
        }
        this.canShow = true;
      },
      error => {
        this.canShow = true;
      }
    )
  }
  profileTab(tabName:string){
    if(tabName!='file-status'){
      localStorage.removeItem(environment.changefilestatusflag);
    }
    this.selectedProfileTab = tabName
  }

}
