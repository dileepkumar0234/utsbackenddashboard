import { Component, Input, OnInit } from '@angular/core';
import { Observable, Observer } from "rxjs";
@Component({
  selector: 'app-docs-data',
  templateUrl: './docs-data.component.html',
  styleUrls: ['./docs-data.component.scss']
})
export class DocsDataComponent implements OnInit {

  
  @Input() docs : any[] = [];

  base64Image: any;

  uploadedFilesWithUrls: any[] = []

  constructor() {
   
   }

  ngOnInit(): void {
    this.uploadedFilesWithUrls = this.docs.map((item:any,index:number)=>{
      let list = item.upload_file.split(".");
      let extension = list[list.length - 1];
      let type = "application/pdf"
      if(extension === 'jpg' || extension === 'png' || extension == 'svg'){
        type = "image/jpeg"
      }
       return {
         type: type,
         name: item.upload_file,
         url: item.upload_file,
         index: index
       }
     })

  }


}
