import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../shared/services/Authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  errorMsg!:string;

  constructor(private _AuthenticationService:AuthenticationService, private _Router:Router){}

  loginForm:FormGroup = new FormGroup({
    email : new FormControl(null, [Validators.required, Validators.email]),
    password : new FormControl(null, Validators.required)
  });

  loginSubmit(){
    if(this.loginForm.valid){
      this._AuthenticationService.Login(this.loginForm.value).subscribe({
        next: res => {this._Router.navigate(['home'])},
        error: err => {this.errorMsg = err.error.message;}
      })
    }
  }

}
