import { Component, Input, OnInit, Output } from '@angular/core';
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
  w2DocsLoaded = false;
  bgDocsLoaded = false;
  hsaDocsLoaded = false;
  iraDocsLoaded = false;
  otherDocsLoaded = false;
  w2Docs : any[] = [];
  bgDocs : any[] = [];
  hsaDocs : any[] = [];
  iraDocs : any[] = [];
  otherDocs : any[] = [];

  constructor(private route : ActivatedRoute, private apiService : ApiService, private authService : AuthService) {
    this.selectedProfileTab = 'w2'
    this.taxYear = this.authService.getTaxYear();
    this.client_id = this.route.snapshot.paramMap.get('id');
  }

  profileTab(tabName:string){
    this.selectedProfileTab = tabName
  }

  ngOnInit(): void {
    this.getRecord('W2');
    this.getRecord('1099B-G');
    this.getRecord('5498-HSA');
    this.getRecord('1099R-IRA');
    this.getRecord('OTHERDOCS');
  }
  getRecord(docType : any)
  {
    var obj : any[] = [];
    var folderPath = this.client_id+'/'+docType+'/';
    return this.apiService.postCall('/upload/getuploaddocs', {folderPath : folderPath, doctype : docType})
    .subscribe(
      res => {
        if (res.data)
        {
          switch(docType) {
            case 'W2' :
              this.w2Docs = res.data.Contents;
              this.w2DocsLoaded = true;
              break;
            case '1099B-G' :
              this.bgDocs = res.data.Contents;
              this.bgDocsLoaded = true;
              break;
            case '5498-HSA' :
              this.hsaDocs = res.data.Contents;
              this.hsaDocsLoaded = true;
              break;
            case '1099R-IRA' :
              this.iraDocs = res.data.Contents;
              this.iraDocsLoaded = true;
              break;
            case 'OTHERDOCS' :
              this.otherDocs = res.data.Contents;
              this.otherDocsLoaded = true;
              break;
          }
        }
      },
      error => {
      }
    )
  }
}
