import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Login } from 'src/app/models/User/Login';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup

  constructor(private _builder : FormBuilder, private _activeRoute : ActivatedRoute, private _userService : UserService) {
    this.loginForm = this._builder.group({
      email : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      password : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]]
    })
  }

  ngOnInit(): void {
  }

  login(){
    if(this.loginForm.valid){
      let loginValues : Login = this.loginForm.value
      this._userService.login(loginValues)
    }else {
      this.loginForm.markAllAsTouched();
    }

  }
}
