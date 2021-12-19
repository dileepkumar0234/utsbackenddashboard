import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

  w3_open(){
    if(document){
      const myOverlayElement = document.getElementById("myOverlay")
      const mySidebarElement = document.getElementById("mySidebar")
      if(myOverlayElement && mySidebarElement){
        this.w3_close2()
        myOverlayElement.style.display = "block";
        mySidebarElement.style.right = "0";
      }
    }
  }

}
