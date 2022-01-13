import { Component, Input,  OnInit } from '@angular/core';
import { Observable, Observer } from "rxjs";
@Component({
  selector: 'app-other-docs',
  templateUrl: './other-docs.component.html',
  styleUrls: ['./other-docs.component.scss']
})
export class OtherDocsComponent implements OnInit {

  @Input() docs : any[] = [];

  base64Image: any;

  uploadedFilesWithUrls: any[] = []

  constructor() {
   
   }

  ngOnInit(): void {
    console.log(this.docs);
    this.uploadedFilesWithUrls = this.docs.map((item:any,index:number)=>{
      let extension = item.upload_file.split(".")[1];
      let type = "application/pdf"
      if(extension === 'jpg'){
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

  downloadImage(imageUrl : any) {
    // let imageUrl =
    //   "http://southparkstudios.mtvnimages.com/shared/characters/celebrities/mr-hankey.png?height=165";

    this.getBase64ImageFromURL(imageUrl).subscribe((base64data : any) => {
      this.base64Image = "data:image/jpg;base64," + base64data;
      // save image to disk
      var link = document.createElement("a");

      document.body.appendChild(link); // for Firefox

      link.setAttribute("href", this.base64Image);
      link.setAttribute("download", "download.jpg");
      link.click();
    });
  }

  getBase64ImageFromURL(url: string) {
    return Observable.create((observer: Observer<string>) => {
      const img: HTMLImageElement = new Image();
      img.crossOrigin = "Anonymous";
      img.src = url;
      if (!img.complete) {
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = err => {
          observer.error(err);
        };
      } else {
        observer.next(this.getBase64Image(img));
        observer.complete();
      }
    });
  }

  getBase64Image(img: HTMLImageElement) {
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    if (ctx != null)
      ctx.drawImage(img, 0, 0);
      
    const dataURL: string = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }


}
