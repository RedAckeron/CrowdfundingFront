import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { AddStepComponent } from './project/add-step/add-step.component';
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

    {path:"AddProjectStep", component :AddStepComponent},
    {path:"Admin", component :AdminComponent},
    {path:"AdminEditUser", component :EditUserComponent},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
