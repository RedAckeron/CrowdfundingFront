import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { User } from '../models/user';
import { LoginComponent } from './login/login.component';
import { UserinscriptionComponent } from './userinscription/userinscription.component';


const routes: Routes = [
  { path : "userinscription", component : UserinscriptionComponent},
  { path : "login",component : LoginComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
