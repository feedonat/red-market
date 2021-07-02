import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileHomePageRoutingModule } from './profile-home-routing.module';

import { ProfileHomePage } from './profile-home.page';
import { ShellModule } from '../../shell/shell.module';
import { UserService } from '../../Services/account/user.service';
import { ComponentsModule } from '../../components/components.module';
import { FirebaseAuthService } from '../../firebase/auth/firebase-auth.service';
import{ProfileSettingComponent} from './profile-setting/profile-setting.component'



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ComponentsModule,
    ProfileHomePageRoutingModule,ShellModule,ReactiveFormsModule
  ],
  declarations: [ProfileHomePage,ProfileSettingComponent],
  providers: [
    UserService,
    FirebaseAuthService
  ],
  exports:[ProfileSettingComponent]
})
export class ProfileHomePageModule {}
