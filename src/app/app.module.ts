import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { UserComponent } from './user/user.component';
import { UserConnectedComponent } from './user/userconnected/userconnected.component';
import { AddStepComponent } from './project/add-step/add-step.component';
import { ShowProjectsComponent } from './project/show-projects/show-projects.component';
import { EditProjectComponent } from './project/edit-project/edit-project.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    UserConnectedComponent,
    AddProjectComponent,
    AddStepComponent,
    ShowProjectsComponent,
    EditProjectComponent
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
