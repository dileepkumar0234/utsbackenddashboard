import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  w3_close(){
    if(document){
      const myOverlayElement = document.getElementById("myOverlay")
      const mySidebarElement = document.getElementById("mySidebar")
      if(myOverlayElement && mySidebarElement){
        myOverlayElement.style.display = "none";
        mySidebarElement.style.right = "-300px";
      }
    }
  }

  w3_open2(){
    if(document){
      const myOverlayElement = document.getElementById("myOverlay2")
      const mySidebarElement = document.getElementById("mySidebar2")
      if(myOverlayElement && mySidebarElement){
        this.w3_close()
        myOverlayElement.style.display = "block";
        mySidebarElement.style.right = "0";
      }
    }
  }

}
