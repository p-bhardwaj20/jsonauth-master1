import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  SideBarOpen = true  ;
  role:string=''; 

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.service.getPermissions().subscribe(res=>{
      console.log(res.data.role);
      this.role = res.data.role
    })
  }

  sideBarToggler() {
    this.SideBarOpen = !this.SideBarOpen
   }

}
