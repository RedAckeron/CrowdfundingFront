import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EditProject } from 'src/app/models/Project/EditProject';
import { Project } from 'src/app/models/Project/Project';
import { Step } from 'src/app/models/Step/Step';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  projectForm : FormGroup
  StepForm: FormGroup
  project! : EditProject

  constructor(private _builder : FormBuilder, private _projectService : ProjectService, private _activeRoute : ActivatedRoute) {

    this.projectForm = this._builder.group({
      title : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      description : [null, [Validators.required]],
      goal : [null, [Validators.required]],
    })

this.StepForm=this._builder.group({
  IdPrj : [null,[]],
  StepName : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
  StepAmount : [null,[Validators.required,Validators.min(1),]]
})
  }

  ngOnInit(): void {
    console.log(this._activeRoute.snapshot.params['id'])
    this._projectService.getById(this._activeRoute.snapshot.params['id']).subscribe({
      next : (res : Project) => {
        this.project = new EditProject(
          res.id,
          res.title,
          res.description,
          res.goal,
          res.steps
        )
        this.projectForm.patchValue({
          title : res.title,
          description : res.description,
          goal : res.goal
        })
      },
    error:()=>{}
    })
  }

  updateForm(){
    this.project.title = this.projectForm.get('title')?.value
    this.project.description = this.projectForm.get('description')?.value
    this.project.goal = this.projectForm.get('goal')?.value

    console.log(this.project)

    this._projectService.update(this.project).subscribe((e) => {
      console.log(e)
    })
  }
  AddStep(){
    let step = new Step(
      0,
      this.project.id,
      this.StepForm.get('StepAmount')?.value,
      this.StepForm.get('StepName')?.value      
    )
    this._projectService.addStep(step).subscribe((e) => { console.log(e)})
  }
  delStep(idStep:number){
    console.log(idStep);
    
    this._projectService.delStep(idStep).subscribe((e) => { console.log(e)})
  }
}
