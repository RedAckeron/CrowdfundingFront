import { Component, OnInit } from '@angular/core';
import { NewProject } from 'src/app/models/Project/NewProject';
import { Project } from 'src/app/models/Project/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-userconnected',
  templateUrl: './userconnected.component.html',
  styleUrls: ['./userconnected.component.scss']
})
export class UserConnectedComponent implements OnInit {
  projects : Project[] = [];

  constructor(private _projectService : ProjectService) { }

  ngOnInit(): void { 
    //getById(id : string) : Observable<Project>{
    this._projectService.getAll().subscribe({
    next : (res) => {
      console.log(res);
       
        // let prj:NewProject = res;
         this.projects=res;

    }
  })
  }
}