import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountSettingPageRoutingModule } from './account-setting-routing.module';

import { AccountSettingPage } from './account-setting.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountSettingPageRoutingModule,
    ReactiveFormsModule,ComponentsModule
  ],
  declarations: [AccountSettingPage]
})
export class AccountSettingPageModule {}
