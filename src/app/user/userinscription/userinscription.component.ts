import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-userinscription',
  templateUrl: './userinscription.component.html',
  styleUrls: ['./userinscription.component.scss']
})
export class UserinscriptionComponent implements OnInit {

  //On a besoin d'une propriété de type FormGroup pour stocker notre formulaire
  registerForm : FormGroup;
  listRole : string[] = ["Contributeur", "ProjectOwner", "Administrateur"];

  //On doit injecter FormBuilder, qui va nous permettre de créer notre formulaire
  constructor(private _builder : FormBuilder) {
    //On crée un nouveau formulaire grâce à notre FormBuilder et on le stocke dans notre propriété registerForm
    this.registerForm = this._builder.group({
      lastname : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      firstname : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      email : [null, [Validators.required, Validators.email]],
      password : [null, [Validators.required]],
      birthdate : [null, [Validators.required]],
      role : ["", [Validators.required]]
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
      console.log(new Date(this.registerForm.value.birthdate));

      //A faire normalement avec une db :
      //let user = new User(...this.registerForm.value); //Crée l'objet à insérer en db
      //this._authService.register(user);

    }
  }


}


