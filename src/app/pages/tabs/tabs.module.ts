import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';
import { FirebaseAuthService } from '../../firebase/auth/firebase-auth.service';
import { ItemComponent } from '../item/item.component';
import { ItemService } from '../../Services/account/item-service';
import { ItemFireStore } from '../item/Item-service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [TabsPage,ItemComponent],
  providers: [FirebaseAuthService,ItemService,ItemFireStore],
  exports:[ItemComponent]
})
export class TabsPageModule {}
