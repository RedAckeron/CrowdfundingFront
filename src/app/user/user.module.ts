import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserinscriptionComponent} from './userinscription/userinscription.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../services/user.service';

@NgModule({
  declarations: [UserComponent,
    UserinscriptionComponent
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
  providers : [UserService]
})
export class UserModule { }
