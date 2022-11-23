import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EditProjetComponent } from './admin/edit-projet/edit-projet.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { EditProjectComponent } from './project/edit-project/edit-project.component';
import { ShowProjectsComponent } from './project/show-projects/show-projects.component';
import { ConnectedComponent } from './user/connected/connected.component';
import { InscriptionComponent } from './user/inscription/inscription.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"", component :HomeComponent},
  {path:"User", component :UserComponent},
  {path:"UserInscription", component :InscriptionComponent},
  {path:"UserConnected", component :ConnectedComponent},
  {path:"AddProject", component :AddProjectComponent},

  {path:"Admin", component :AdminComponent},
  {path:"AdminEditUser", component :EditUserComponent},
  {path:"AdminEditProject", component :EditProjetComponent},

  {path: "projects", component : ShowProjectsComponent},
  {path: "edit-project/:id", component : EditProjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
