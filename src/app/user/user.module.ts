import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserinscriptionComponent} from './userinscription/userinscription.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { LoginService } from '../services/login.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    UserinscriptionComponent,
    LoginComponent

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports : [
  ],
  bootstrap : [UserComponent
  ],
  providers : [
    UserService,
    LoginService
  ]
})
export class UserModule { }
