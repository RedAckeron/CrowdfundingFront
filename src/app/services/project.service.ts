import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private _url : string = "http://localhost:5000/api/project/"

  constructor(private _httpClient : HttpClient) { }

  getAll() : Observable<Project[]>{
    return this._httpClient.get<Project[]>(this._url + "GetAll/");
  }

  getById(id : string) : Observable<Project>{
    return this._httpClient.get<Project>(this._url + "GetOne/" + id)
  }

  create(project : Project){
    return this._httpClient.post(this._url, project)
  }

  update(project : Project, id : string){
    return this._httpClient.put(this._url + id, project)
  }

  delete(id : string){
    return this._httpClient.delete(this._url + id)
  }
}
