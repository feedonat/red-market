import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatListPageRoutingModule } from './chat-list-routing.module';

import { ChatListPage } from './chat-list.page';
import { ItemService } from '../../Services/account/item-service';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatListPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ChatListPage],
  providers:[ItemService]
})
export class ChatListPageModule {}
