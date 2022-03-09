import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

 

  panelOpenState = false;

  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar, private service: ApiService) { }

  // openSnackBar() {
  //   this._snackBar.openFromComponent(SnackComponent, {
  //     duration: this.durationInSeconds * 1000,
  //   })
  // }

  openquali(){
    this.service.sidequaliclick.next(true)
  }

  openSnackBar() {
    this._snackBar.open('Make sure VPN is connected', 'Dismiss', {
      panelClass: ['blue-snackbar'],
      duration: 3000
    } )

  }

  ngOnInit(): void {
  }

}
function panelClass(arg0: string, arg1: string, panelClass: any, arg3: never[]) {
  throw new Error('Function not implemented.');
}
