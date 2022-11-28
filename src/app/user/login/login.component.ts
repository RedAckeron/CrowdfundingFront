import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  reponseApi! : Login;
  //On a besoin d'une propriété de type FormGroup pour stocker notre formulaire
  registerForm : FormGroup;

  //On doit injecter FormBuilder, qui va nous permettre de créer notre formulaire
  constructor(private _builder : FormBuilder,private _loginService : LoginService) {
    //On crée un nouveau formulaire grâce à notre FormBuilder et on le stocke dans notre propriété registerForm
    this.registerForm = this._builder.group({
      Email : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      Password : [null, [Validators.required]]
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

      //A faire normalement avec une db :
      //let user = new User(...this.registerForm.value); //Crée l'objet à insérer en db
      let login = new Login(
        this.registerForm.value.Email,
        this.registerForm.value.Password
        );
      this._loginService.postLogin(login).subscribe({
        next : (res : Login) => {
          console.log(res);
          this.reponseApi = res;
        },
        error : () => {},
        complete : () => {}
      })
      //this._authService.register(user);

    }
  }
}
