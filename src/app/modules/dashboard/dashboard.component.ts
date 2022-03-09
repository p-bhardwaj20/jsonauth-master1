import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { gsap } from 'gsap'
import { ApiService } from 'src/app/api/api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  panelOpenState = false;

  collapsed = false;
  init = false;
  

 

  open: boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document, private service: ApiService) { }

  ngOnInit(): void {
    this.service.sidequaliclick.subscribe(res=>{
      this.open=!this.open
      console.log(this.open)
    })
  }

  toggle(menu: HTMLElement) {
    const list = Array.prototype.slice.call(menu.children) as HTMLElement[];
    this.init = true;
    this.collapsed = !this.collapsed;

    gsap.to(menu, {
      translateY: 0,
      duration: 0.6
    });
    this.animateElements(this.collapsed, list, menu);
  }

  private animateElements(collapse: boolean, list: HTMLElement[], menu: HTMLElement): void {
    if (collapse) {
      for (let i=0; i<list.length; i++) {
        const sliced = list.slice(i, list.length);
        gsap.to(sliced, {
          translateY: 60 * i,
          delay: 0.3 * i,
          duration: 0.6
        });
      }
    } else {
      gsap.to(list, {
        y: 0,
        duration: 0.3,
      }).then(() => {
        gsap.to(menu, {
          translateY: -80,
          duration: 0.3
        })
      })
    }
  }


 

 getFullscreenElement() {
   return this.document.fullscreenElement
 }

  fullscreen() {
    if (this.getFullscreenElement()) {
      this.document.exitFullscreen();
    } else {
      this.document.getElementById("role")?.requestFullscreen().catch(console.log);
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

  

}


