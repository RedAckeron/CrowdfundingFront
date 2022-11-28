import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import * as dayjs from 'dayjs';
import { concatWith } from 'rxjs';
import { NewProject } from 'src/app/models/Project/NewProject';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
    //On a besoin d'une propriété de type FormGroup pour stocker notre formulaire
    registerForm : FormGroup;
    today = new Date();

  //On doit injecter FormBuilder, qui va nous permettre de créer notre formulaire
  constructor(private _builder : FormBuilder) {
    //On crée un nouveau formulaire grâce à notre FormBuilder et on le stocke dans notre propriété registerForm
    this.registerForm = this._builder.group({
      PrjName : [null, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      PrjDescription : [null, [Validators.required, Validators.minLength(30), Validators.maxLength(1000)]],
      PrjGoal:[null,[Validators.required, Validators.min(1)]],
      PrjDtIn:[null,[Validators.required,this.ChkDtIn()]],
      PrjDtOut:[null,[Validators.required]]
    }, { validators : [ this.ValidatorDateDiff,this.ChkDtOut ]})
   }
  ngOnInit(): void {
  }

//Verification de la date entrée
ChkDtIn(): ValidatorFn | null
    {
      return (control : AbstractControl) => {
      if(dayjs(control.value).format('YYYY/MM/DD')>=(dayjs(new Date()).format('YYYY/MM/DD')))
        {
        return null;
          }
      else {
        return {ChkDtIn:true}
          }
      }
    }

  //si la diff est plus grande que5 ans sa renvoi error
ChkDtOut(form : FormGroup)    {
  let dt_in=dayjs(form.value['PrjDtIn']);
  let dt_out=dayjs(form.value['PrjDtOut']);
  let dtoutmin=dt_in.add(28,'day');

  //console.log(dt_out.format('DD/MM/YYYY'));
  //console.log(dtoutmin.format('DD/MM/YYYY'));

  if(dt_out>dtoutmin){
      //console.log("Il y a plus de 28 jours");
      return null
    }
else {
    //console.log("Il y a moins de 28 jours");
    return { min28day : true }
    }
  }

//si la diff est plus grande que 28 jours sa renvoi error
ValidatorDateDiff(form : FormGroup)    {
    let dt_in=dayjs(form.value['PrjDtIn']);
    let dt_out=dayjs(form.value['PrjDtOut']);
    if(((dt_out.diff(dt_in))/1000)>(31536000*5)){
       return { max5yr : true }
      }
    else {
      return null
    }

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
