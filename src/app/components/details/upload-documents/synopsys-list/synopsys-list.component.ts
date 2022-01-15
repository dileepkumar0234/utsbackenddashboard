import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Observable, Observer } from "rxjs";

@Component({
  selector: 'app-synopsys-list',
  templateUrl: './synopsys-list.component.html',
  styleUrls: ['./synopsys-list.component.scss']
})
export class SynopsysListComponent implements OnInit {

  base64Image: any;

  synopsysList : any[] = [];
  client_id : any;
  synopsysFilesWithUrls: any[] = []
  constructor(private apiService : ApiService,  private route : ActivatedRoute,) { 
    this.client_id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getSynopsys();
  }

  getSynopsys()
  {
    this.apiService.postCall('/member/usersynopsys', {client_id : this.client_id})
    .subscribe(
      res => {
        if (res.synopsys)
        {
          this.synopsysList = res.synopsys;
          this.synopsysFilesWithUrls = this.synopsysList.map((item:any,index:number)=>{
            let list = item.synopsys_file.split(".");
            let extension = list[list.length - 1];
            let type = "application/pdf"
            if(extension === 'jpg'){
              type = "image/jpeg"
            }
            else if (extension == 'svg')
            {
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
      },
      error=> {
      }
    )
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


  deleteSynopsys(synopsys_id : any, index : any)
  {
    if(confirm("Are you sure to delete")) {
      this.apiService.postCall('/member/deletesynopsys', { client_id : this.client_id, synopsys_id : synopsys_id })
      .subscribe(
        res => {
          this.synopsysList.splice(index, 1);
          this.getSynopsys();
        },
        error => {
        }
      )
    }
  }

}
