import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProjetComponent } from './admin/edit-projet/edit-projet.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './user/inscription/inscription.component';

const routes: Routes = [
  {path:"", component :HomeComponent},
  {path:"inscription", component :InscriptionComponent},
  {path:"AdminEditUser", component :EditUserComponent},
  {path:"AdminEditProject", component :EditProjetComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
