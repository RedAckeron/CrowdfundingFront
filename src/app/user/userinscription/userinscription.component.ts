import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import * as e from 'express';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-userinscription',
  templateUrl: './userinscription.component.html',
  styleUrls: ['./userinscription.component.scss']
})
export class UserinscriptionComponent implements OnInit {
  reponseApi! : User;
  //On a besoin d'une propriété de type FormGroup pour stocker notre formulaire
  registerForm : FormGroup;
  listRole : number[] = [1, 2, 3];
  listNameRole : string[] = ["Contributeur","Project Owner","Administrateur"];

  //On doit injecter FormBuilder, qui va nous permettre de créer notre formulaire
  constructor(private _builder : FormBuilder,private _userService : UserService) {
    //On crée un nouveau formulaire grâce à notre FormBuilder et on le stocke dans notre propriété registerForm
    this.registerForm = this._builder.group({
      NickName : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      Email : [null, [Validators.required, Validators.email]],
      Password : [null, [Validators.required]],
      Birthdate : [null, [Validators.required], this.majeurValidator()],
      IdRole : ["", [Validators.required]]
    })
   }

  ngOnInit(): void {

  }

  register(){
    if(this.registerForm.invalid){
      //Si l'entièreté du formulaire est invalide, on va marquer tous les champos comme touchés
      this.registerForm.markAllAsTouched();
    }
    else {
      console.log(this.registerForm.value);
      //Construit un object json avec toutes les valeurs du formulaire
      console.log(new Date(this.registerForm.value.Birthdate));

      //A faire normalement avec une db :
      //let user = new User(...this.registerForm.value); //Crée l'objet à insérer en db
      let user = new User(
        0,
        this.registerForm.value.NickName,
        this.registerForm.value.Email,
        this.registerForm.value.Password,
        this.registerForm.value.Birthdate,
        this.registerForm.value.IdRole

        );
      this._userService.postUser(user).subscribe({
        next : (res : User) => {
          console.log(res);
          this.reponseApi = res;
        },
        error : () => {},
        complete : () => {}
      })
      //this._authService.register(user);

    }
  }
 //Custom validator
 majeurValidator() : ValidatorFn | null {
  //On reçoit le control sur lequel le validateur est testé
  return (control : AbstractControl) => {
    //control.value -> //'1989-10-16'
    if(control.value) {
      //On va fabriquer une date pour plus de facilité de manipulation
      let dateATest : Date = new Date(control.value);
      //On teste si la personne est majeure
      if(new Date().getFullYear() - dateATest.getFullYear() < 18){
        //Si < 18 on renvoie une erreur
        return { mineur : true }
      }
    }
    return null;
  }
}

}


