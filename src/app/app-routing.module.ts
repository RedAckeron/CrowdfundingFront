import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEditUserComponent } from './admin/admin-edit-user/admin-edit-user.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { EditProjectComponent } from './project/edit-project/edit-project.component';
import { ShowProjectsComponent } from './project/show-projects/show-projects.component';
//import { InscriptionComponent } from './user/inscription/inscription.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    {path:"", component :HomeComponent},
    { path : "user", component : UserComponent,
        loadChildren : () => import("./user/user.module").then(m => m.UserModule)},
    {path:"AddProject", component :AddProjectComponent},
    {path:"ShowProjects", component :ShowProjectsComponent},
    {path:"editProject/:id", component :EditProjectComponent},

    {path:"AdminEditUser", component :AdminEditUserComponent},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
