import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './user/inscription/inscription.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConnectedComponent } from './user/connected/connected.component';
import { HomeComponent } from './home/home.component';
import { EditProjetComponent } from './admin/edit-projet/edit-projet.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    NavbarComponent,
    ConnectedComponent,
    HomeComponent,
    EditProjetComponent,
    EditUserComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
