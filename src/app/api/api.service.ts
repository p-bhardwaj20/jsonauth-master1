import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  sidequaliclick = new Subject<boolean>()

  constructor(private http: HttpClient) { }


  login(logindata:{email:string,password:string}){
    return this.http.post<any>('http://localhost:3000/login',logindata)
  }

  signup(signupData:any){
    return this.http.post<any>('http://localhost:3000/update',signupData)
  }

  getPermissions(){
    let obj = {
      email:sessionStorage.getItem('email')
    }
    return this.http.post<any>("http://localhost:3000/getPermission",obj)
  }
}
