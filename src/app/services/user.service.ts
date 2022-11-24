import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private _url : string = "http://localhost:8125/api/user/register";

  constructor(private _httpClient : HttpClient) { }

  postUser(user : User) : Observable<User> {
    return this._httpClient.post<User>(this._url, user);
  }
}
