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
    this.get_item();
  }

  profileTab(tabName:string){
    this.selectedProfileTab = tabName
  }
  
  ngOnInit(): void {
    // this.getAllDocs();
    // this.w3docs();
  }
  w3docs(){
    var folderPath = this.client_id+'/W2/';
    var doctype = 'W2';
    this.apiService.postCall('/upload/getuploaddocs', {folderPath : folderPath, doctype : doctype})
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

  get_item() {
    console.log("ASDFasdf");
    var obj : any[] = [];
    return obj;
  }
  getRecord(docType : any)
  {
    debugger;
    var obj : any[] = [];
    var folderPath = this.client_id+'/'+docType+'/';
    this.apiService.postCall('/upload/getuploaddocs', {folderPath : folderPath, doctype : docType})
    .subscribe(
      res => {
        if (res.downloadInfo)
        {
          obj = res.downloadInfo;
        }
      },
      error => {
      }
    )

    return obj;
    if (this.downloadInfo != null)
    {
      obj = this.downloadInfo.filter((x : any) => x.typename === docType);
      if (obj.length > 0)
        return obj[0].docsdata;
    }
    return obj;
  }
}
