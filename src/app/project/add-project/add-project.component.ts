import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

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
      PrjName : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      PrjDescription : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(1000)]],
    })
   }

  ngOnInit(): void {
  }
  register()
  {
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
