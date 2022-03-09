import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
     private http: HttpClient,
      private router: Router,
      private service:ApiService,
      private snack:MatSnackBar
      ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    })
  }

  signUp(){
    // this.service.signup(this.signupForm.value).subscribe(res=>{
    //   console.log(res);
    //   if(res.success){
    //     this.snack.open('Registered Succesfully','dismiss',{duration:3000});
    //     this.router.navigate(['/'])
    //   }else{
    //     this.snack.open(res.message,'dismiss',{duration:3000})
    //   }
    // })

    this.http.post<any>("http://localhost:8000/signUpusers",this.signupForm.value).subscribe(res=>{
      this.snack.open('Registered successfully', 'dismiss', {duration: 3000});
      this.signupForm.reset();
      this.router.navigate(['login']);
    },
    err=> {
      alert("Something went wrong")
    })
  }
  validate(value:any){
    const password = this.signupForm.get('password')?.value;
    if(password === value){
    }else{
      this.signupForm.get('confirmpassword')?.setErrors({'incorrect':true});
    }
  }

}
