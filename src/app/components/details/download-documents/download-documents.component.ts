import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download-documents',
  templateUrl: './download-documents.component.html',
  styleUrls: ['./download-documents.component.scss']
})
export class DownloadDocumentsComponent implements OnInit {

  selectedProfileTab = ''
  tabName="upload"

  constructor() { 
    this.selectedProfileTab = 'w2'
  }

  profileTab(tabName:string){
    this.selectedProfileTab = tabName
  }
  
  ngOnInit(): void {
  }

}
