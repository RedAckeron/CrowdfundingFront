import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  projectForm : FormGroup
  project! : Project


  constructor(private _builder : FormBuilder, private _projectService : ProjectService, private _activeRoute : ActivatedRoute) {

    this.projectForm = this._builder.group({
      title : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      description : [null, [Validators.required]],
      goal : [null, [Validators.required]],
    })
  }

  ngOnInit(): void {
    console.log(this._activeRoute.snapshot.params['id'])
    this._projectService.getById(this._activeRoute.snapshot.params['id']).subscribe({
      next : (res : Project) => {
        this.projectForm.patchValue({
          title : res.title,
          description : res.description,
          goal : res.goal
        })
      }
    })
  }

  updateForm(){

  }
}
