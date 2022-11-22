import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { InscriptionComponent } from './user/inscription/inscription.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConnectedComponent } from './user/connected/connected.component';
import { HomeComponent } from './home/home.component';
import { EditProjetComponent } from './admin/edit-projet/edit-projet.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { AdminComponent } from './admin/admin.component';
import { AddProjectComponent } from './project/add-project/add-project.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EditProjetComponent,
    AdminComponent,
    AddProjectComponent
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
