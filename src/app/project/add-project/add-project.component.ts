import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import * as dayjs from 'dayjs';
import { concatWith } from 'rxjs';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
    //On a besoin d'une propriété de type FormGroup pour stocker notre formulaire
    registerForm : FormGroup;
  //On doit injecter FormBuilder, qui va nous permettre de créer notre formulaire
  constructor(private _builder : FormBuilder) {
    //On crée un nouveau formulaire grâce à notre FormBuilder et on le stocke dans notre propriété registerForm
    this.registerForm = this._builder.group({
      PrjName : [null, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      PrjDescription : [null, [Validators.required, Validators.minLength(30), Validators.maxLength(1000)]],
      PrjGoal:[null,[Validators.required, Validators.min(1)]],
      PrjDtIn:[null,[Validators.required]],
      PrjDtOut:[null,[Validators.required]]
    }, { validators : [ this.ValidatorDateDiff ]})
   }
  ngOnInit(): void {
  }

//Verification de la date entrée
ChkDtIn()
{

}
ChkDtOut()
{

}
//si la diff est plus grande que le nombre d année passer en param sa renvoi false
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
      //Si l'entièreté du formulaire est invalide, on va marquer tous les champos comme touchés
      this.registerForm.markAllAsTouched();
    }
    else {
      console.log(this.registerForm.value);

      //Construit un object json avec toutes les valeurs du formulaire
      //A faire normalement avec une db :
      //let user = new User(...this.registerForm.value); //Crée l'objet à insérer en db
      //this._authService.register(user);
       
    }    


  }


}