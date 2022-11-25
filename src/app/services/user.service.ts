import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { Login } from '../models/User/Login';
import { Token } from '../models/User/Token';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private _url : string = "http://localhost:8125/api/user/register";

  private _isConnected$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  isConnected$ : Observable<boolean> = this._isConnected$.asObservable();


  constructor(private _httpClient : HttpClient, private _router : Router) { }

  postUser(user : User) : Observable<User> {
    return this._httpClient.post<User>(this._url, user);
  }

  login(loginForm : Login) : void {
    this._httpClient.post<Token>(this._url + "login", loginForm).subscribe({
      next : (res) => {
        localStorage.setItem('token', res.token)
        this._isConnected$.next(true);
        this._router.navigateByUrl('/');
      }
    })
  }

  logout() : void {
    localStorage.removeItem('token');
    this._isConnected$.next(false);
    this._router.navigateByUrl('/');
  }
}
