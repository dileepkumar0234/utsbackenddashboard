import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-upload-documents',
  templateUrl: './upload-documents.component.html',
  styleUrls: ['./upload-documents.component.scss']
})
export class UploadDocumentsComponent implements OnInit {

  @Input() currentFileStatus : any;

  fileTitle = ""
  fileToUpload: File | null = null;
  taxyear : any;
  client_id : any;
  invalidTitle = false
  uploadingInProgress = false
  sucessMessage = ''
  uploadErrorMsg= ""
  constructor(private authService : AuthService, private route : ActivatedRoute, private apiService : ApiService ) { }

  ngOnInit(): void {
    this.taxyear = this.authService.getTaxYear();
    this.client_id = this.route.snapshot.paramMap.get('id');
  }

  isFileSizeValid(fileSize:number){
    return fileSize < (2 * 1024 * 1024)
  }

  async handleInput(event:any)
  {
    this.fileTitle = event.target.value;
  }

  async handleFileInput(event:any) {
    this.fileToUpload = event.target.files.item(0);
    this.uploadErrorMsg = ""
    if(this.fileToUpload){
      if(this.isFileSizeValid(this.fileToUpload.size)){
        await setTimeout(()=>{            
              var reader = new FileReader();
              reader.readAsDataURL(event.target.files[0]);
        },1000)
      }
      else{
        const indexInput:any = document.getElementById(`synopsys_file`)
        if(indexInput){
          indexInput.value = null
        }
        this.uploadErrorMsg = "Please upload image size less than 2MB"
      }
    }
  }

  uploadFileToActivity() {
    if (this.fileTitle == "" || this.fileToUpload == null)
    {
      this.uploadErrorMsg = "Fields cannot be empty"
      return;
    }
      const formData: FormData = new FormData();
      formData.append('synopsys_file', this.fileToUpload);
      formData.append('folderPath', `${this.client_id}/Synopsys/`);
      formData.append('synopsys_title', this.fileTitle);
      formData.append('taxyear', this.taxyear);
      formData.append('client_id', this.client_id);
      formData.append('user_id', this.authService.getUserId());
      this.uploadingInProgress = true
      this.apiService.postCall('/member/savesynopsys', formData)
    .subscribe(
        res => {
          this.uploadingInProgress = false
          this.sucessMessage = res.message
      },
      error => {
        this.uploadingInProgress = false
        console.log("====error",error)
      }
     )
    }
}
