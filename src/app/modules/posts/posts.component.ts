import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  SideBarOpen = true  ;

  panelOpenState = false;

  open: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document, private service: ApiService) { }

  ngOnInit(): void {
    this.service.sidequaliclick.subscribe(res=>{
      this.open=!this.open
      console.log(this.open)
    })
  }

  sideBarToggler() {
    this.SideBarOpen = !this.SideBarOpen
   }

  getFullscreenElement() {
    return this.document.fullscreenElement
  }
 
   fullscreen() {
     if (this.getFullscreenElement()) {
       this.document.exitFullscreen();
     } else {
       this.document.getElementById("report")?.requestFullscreen().catch(console.log);
     }
   }
 
   getFullscreenElement2(){
     return this.document.fullscreenElement
   }
 
   fullscreen2() {
     if (this.getFullscreenElement2()) {
       this.document.exitFullscreen();
     } else {
       this.document.getElementById("report2")?.requestFullscreen().catch(console.log);
     }
   }

   getFullscreenElement3(){
    return this.document.fullscreenElement
  }

  fullscreen3() {
    if (this.getFullscreenElement3()) {
      this.document.exitFullscreen();
    } else {
      this.document.getElementById("report3")?.requestFullscreen().catch(console.log);
    }
  }

  getFullscreenElement4(){
    return this.document.fullscreenElement
  }

  fullscreen4() {
    if (this.getFullscreenElement4()) {
      this.document.exitFullscreen();
    } else {
      this.document.getElementById("report4")?.requestFullscreen().catch(console.log);
    }
  }

  getFullscreenElement5(){
    return this.document.fullscreenElement
  }

  fullscreen5() {
    if (this.getFullscreenElement5()) {
      this.document.exitFullscreen();
    } else {
      this.document.getElementById("report5")?.requestFullscreen().catch(console.log);
    }
  }

}
