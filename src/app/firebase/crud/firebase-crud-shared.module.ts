import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';
import { FirebaseCreateUserModal } from './user/create/firebase-create-user.modal';
import { SelectUserImageModal } from './user/select-image/select-user-image.modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FirebaseCreateUserModal,
    SelectUserImageModal
  ],
  exports: [
    SelectUserImageModal,
    FirebaseCreateUserModal
  ]
})
export class FirebaseCrudSharedModule {}
