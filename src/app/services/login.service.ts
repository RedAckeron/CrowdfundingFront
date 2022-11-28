import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private _url : string = "http://localhost:8125/api/user/login";

  constructor(private _httpClient : HttpClient) { }

  postLogin(login : Login) : Observable<Login> {
    return this._httpClient.post<Login>(this._url, login);
  }
}
