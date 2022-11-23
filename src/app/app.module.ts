import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './user/inscription/inscription.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConnectedComponent } from './user/connected/connected.component';
import { HomeComponent } from './home/home.component';
import { EditProjetComponent } from './admin/edit-projet/edit-projet.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ShowProjectsComponent } from './project/show-projects/show-projects.component';
import { EditProjectComponent } from './project/edit-project/edit-project.component';


@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    NavbarComponent,
    ConnectedComponent,
    HomeComponent,
    EditProjetComponent,
    EditUserComponent,
    AdminComponent,
    UserComponent,
    AddProjectComponent,
    ShowProjectsComponent,
    EditProjectComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule, //Pour utiliser le ngModel sur les input
    ReactiveFormsModule, //Pour pouvoir utiliser les ReactiveForms (FormBuilder)
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
