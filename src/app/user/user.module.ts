import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserinscriptionComponent} from './userinscription/userinscription.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent,
    UserinscriptionComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  exports : [
  ],
  bootstrap : [UserComponent
  ]
})
export class UserModule { }
