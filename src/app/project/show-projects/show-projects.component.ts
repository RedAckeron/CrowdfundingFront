import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-show-projects',
  templateUrl: './show-projects.component.html',
  styleUrls: ['./show-projects.component.scss']
})
export class ShowProjectsComponent implements OnInit {


  projects : Project[] = []

  constructor(private _projectService : ProjectService) { }

  ngOnInit(): void {
    this._projectService.getAll().subscribe({
      next : (res) => {
        this.projects = res
      }
    })
  }
}
