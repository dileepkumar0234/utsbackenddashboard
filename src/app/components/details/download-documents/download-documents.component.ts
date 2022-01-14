import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-download-documents',
  templateUrl: './download-documents.component.html',
  styleUrls: ['./download-documents.component.scss']
})
export class DownloadDocumentsComponent implements OnInit {

  @Input() currentFileStatus : any;

  selectedProfileTab = ''
  tabName="upload"
  client_id : any;
  taxYear : any;
  downloadInfo : any;
  dataLoaded = false;

  constructor(private route : ActivatedRoute, private apiService : ApiService, private authService : AuthService) { 
    this.selectedProfileTab = 'w2'
    this.taxYear = this.authService.getTaxYear();
    this.client_id = this.route.snapshot.paramMap.get('id');
  }

  profileTab(tabName:string){
    this.selectedProfileTab = tabName
  }
  
  ngOnInit(): void {
    this.getAllDocs();
  }

  getAllDocs()
  {
    this.apiService.postCall('/member/userdocsinfo', {client_id : this.client_id, taxYear : this.taxYear})
    .subscribe(
      res => {
        if (res.downloadInfo)
        {
          this.downloadInfo = res.downloadInfo;
          this.dataLoaded = true;
        }
      },
      error => {
      }
    )
  }

  getRecord(docType : any)
  {
    var obj : any[] = [];
    if (this.downloadInfo != null)
    {
      obj = this.downloadInfo.filter((x : any) => x.typename === docType);
      if (obj.length > 0)
        return obj[0].docsdata;
    }
    return obj;
  }
}
