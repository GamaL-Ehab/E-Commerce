import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { AuthenticationService } from '../../../shared/services/Authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  errorMsg!:string;

  constructor(private _AuthenticationService:AuthenticationService, private _Router:Router){}

  registerForm : FormGroup = new FormGroup({
    name : new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email : new FormControl(null, [Validators.required, Validators.email]),
    password : new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][A-Za-z0-9]{9,}$/)]),
    rePassword : new FormControl(null, [Validators.required]),
    phone : new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  }, this.rePassValidator);

  submitRegister(){
    if(this.registerForm.valid){
      this._AuthenticationService.Register(this.registerForm.value).subscribe(
        {
          next: res => this._Router.navigate(['home']),
          error: err => this.errorMsg = err.error.message
        }
      )
    }
  }

  rePassValidator(form:AbstractControl){
    if(form.get('password')?.value == form.get('rePassword')?.value){
      return null;
    }else{
      form.get('rePassword')?.setErrors({mismatch:true});
      return {mismatch:true}
    }
  }

}
