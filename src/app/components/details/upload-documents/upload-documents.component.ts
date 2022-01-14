import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-documents',
  templateUrl: './upload-documents.component.html',
  styleUrls: ['./upload-documents.component.scss']
})
export class UploadDocumentsComponent implements OnInit {

  @Input() currentFileStatus : any;

  constructor() { }

  ngOnInit(): void {
  }

}
