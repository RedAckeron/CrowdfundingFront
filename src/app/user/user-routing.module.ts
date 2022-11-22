import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserinscriptionComponent } from './userinscription/userinscription.component';

const routes: Routes = [
  { path : "userinscription", component : UserinscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
