import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { EditProjetComponent } from './admin/edit-projet/edit-projet.component';
import { AdminComponent } from './admin/admin.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { UserComponent } from './user/user.component';
import { UserConnectedComponent } from './user/userconnected/userconnected.component';
import { AddStepComponent } from './project/add-step/add-step.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EditProjetComponent,
    AdminComponent,
    UserComponent,
    UserConnectedComponent,
    AddProjectComponent,
    AddStepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Pour utiliser le ngModel sur les input
    ReactiveFormsModule //Pour pouvoir utiliser les ReactiveForms (FormBuilder)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
