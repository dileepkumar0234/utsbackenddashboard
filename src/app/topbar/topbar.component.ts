import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  w3_open(){
    if(document){
      const myOverlayElement = document.getElementById("myOverlay")
      const mySidebarElement = document.getElementById("mySidebar")
      if(myOverlayElement && mySidebarElement){
        myOverlayElement.style.display = "block";
        mySidebarElement.style.right = "0";
      }
    }
  }

  w3_open2(){
    if(document){
      const myOverlayElement = document.getElementById("myOverlay2")
      console.log("=======myOverlayElement",myOverlayElement)
      const mySidebarElement = document.getElementById("mySidebar2")
      console.log("=======mySidebarElement",mySidebarElement)
      if(myOverlayElement && mySidebarElement){
        myOverlayElement.style.display = "block";
        mySidebarElement.style.right = "0";
      }
    }
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

  w3_close2(){
    if(document){
      const myOverlayElement = document.getElementById("myOverlay2")
      const mySidebarElement = document.getElementById("mySidebar2")
      if(myOverlayElement && mySidebarElement){
        myOverlayElement.style.display = "none";
        mySidebarElement.style.right = "-300px";
      }
    }
  }

}
