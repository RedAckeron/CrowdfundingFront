import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import * as dayjs from 'dayjs';
import { concatWith } from 'rxjs';
import { NewProject } from 'src/app/models/Project/NewProject';
import { Project } from 'src/app/models/Project/Project';
import { DateService } from 'src/app/services/date.service';
import {ProjectService} from 'src/app/services/project.service'
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
    //On a besoin d'une propriété de type FormGroup pour stocker notre formulaire
    registerForm : FormGroup;
    today = new Date();
    _projectRepo? : ProjectService;
  //On doit injecter FormBuilder, qui va nous permettre de créer notre formulaire
  constructor(private _builder : FormBuilder, _dateService : DateService,_projectRepo : ProjectService) {
    //On crée un nouveau formulaire grâce à notre FormBuilder et on le stocke dans notre propriété registerForm
    this.registerForm = this._builder.group({
      PrjName : [null, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      PrjDescription : [null, [Validators.required, Validators.minLength(30), Validators.maxLength(1000)]],
      PrjGoal:[null,[Validators.required, Validators.min(1)]],
      PrjDtIn:[null,[Validators.required,_dateService.PrjChkDtIn()]],
      PrjDtOut:[null,[Validators.required]]
    }, { validators : [ _dateService.PrjValidatorDateDiff,_dateService.PrjChkDtOut ]})
   
  }
   
  ngOnInit(): void {
  }


//Envoi du form vers le service
sendformprj(){
    if(this.registerForm.invalid){
      //Si l'entièreté du formulaire est invalide, on va marquer tous les champs comme touchés
      this.registerForm.markAllAsTouched();
    }
    else {


    let project = new NewProject(
      1,
      this.registerForm.value['PrjName'],
      this.registerForm.value['PrjDescription'],
      this.registerForm.value['PrjGoal'],
      this.registerForm.value['PrjDtIn'],
      this.registerForm.value['PrjDtOut'],
      false
    );

    //this._projectRepo?.create(project);

    console.log(project);
    
/*
      idOwner
      title : string;
      description : string;
      goal : number;
      beginDate : Date;
      endDate : Date;
      isValidate : boolean;
*/

      //Construit un object json avec toutes les valeurs du formulaire
      //A faire normalement avec une db :
      //let user = new User(...this.registerForm.value); //Crée l'objet à insérer en db
      //this._authService.register(user);

    }


  }


}
