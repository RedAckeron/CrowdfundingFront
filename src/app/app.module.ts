import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { UserComponent } from './user/user.component';
import { UserConnectedComponent } from './user/userconnected/userconnected.component';
import { ShowProjectsComponent } from './project/show-projects/show-projects.component';
import { EditProjectComponent } from './project/edit-project/edit-project.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminEditProjectComponent } from './admin/admin-edit-project/admin-edit-project.component';
import { AdminEditUserComponent } from './admin/admin-edit-user/admin-edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserComponent,
    UserConnectedComponent,
    AddProjectComponent,
    ShowProjectsComponent,
    EditProjectComponent,
    AdminEditProjectComponent,
    AdminEditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Pour utiliser le ngModel sur les input
    ReactiveFormsModule, //Pour pouvoir utiliser les ReactiveForms (FormBuilder)
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
