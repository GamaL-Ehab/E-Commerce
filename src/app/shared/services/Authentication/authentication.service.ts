import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterData } from '../../interfaces/register-data';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { RegisterFail } from '../../interfaces/register-fail';
import { RegisterSuccess } from '../../interfaces/register-success';
import { loginData } from '../../interfaces/login-data';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _HttpClient:HttpClient) { }

  Register(data:RegisterData):Observable<RegisterFail|RegisterSuccess>{
    return this._HttpClient.post<RegisterFail|RegisterSuccess>(`${environment.baseUrl}/api/v1/auth/signup`, data);
  }

  Login(data:loginData){
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/signin`, data);
  }
}
