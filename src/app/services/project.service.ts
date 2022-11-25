import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EditProject } from '../models/Project/EditProject';
import { Project } from '../models/Project/Project';


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

  update(project : EditProject){
    return this._httpClient.put(this._url + "update", project)
  }

  delete(id : string){
    return this._httpClient.delete(this._url + id)
  }
}
