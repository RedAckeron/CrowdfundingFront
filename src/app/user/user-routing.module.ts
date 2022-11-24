import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { User } from '../models/user';
import { UserConnectedComponent } from './userconnected/userconnected.component';
import { UserinscriptionComponent } from './userinscription/userinscription.component';

const routes: Routes = [
  { path : "userinscription", component : UserinscriptionComponent},
  { path : "userconnected",component : UserConnectedComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
