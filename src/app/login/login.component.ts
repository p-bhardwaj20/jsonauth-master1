import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup
  constructor(
    private formBuilder: FormBuilder,
     private http: HttpClient,
      private router: Router,
      private service:ApiService,
      private snack:MatSnackBar,
      private toast: NgToastService
      ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  login(){
    this.http.get<any>("http://localhost:8000/signUpusers").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password 
      });
      if(user){
        this.loginForm.reset();
        this.router.navigate(['homepage'])
        this.snack.open('Logged in successfully', 'dismiss',{duration: 3000});
      }else{
        this.snack.open('Email or password is incorrect', 'dismiss', {duration: 3000});
      }
    },err=>{
      alert("Something went wrong")
    })
    // console.log(`login clicked`);
    // this.service.login(this.loginForm.value).subscribe(res=>{
    //   const {allowLogin} = res;
    //   if(allowLogin){
    //     localStorage.setItem('allowlogin',JSON.stringify(allowLogin));
    //     this.router.navigate(['homepage'])
    //     this.snack.open('Logged in Successfully','dismiss',{
    //       duration: 3000
    //     });
    //   }else{
    //     this.snack.open('Email or Password is incorrect','dismiss',{
    //       duration: 3000
    //     });
    //   }
    // })
  }

}
