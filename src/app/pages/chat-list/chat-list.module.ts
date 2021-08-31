import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatListPageRoutingModule } from './chat-list-routing.module';

import { ChatListPage } from './chat-list.page';
import { ItemService } from '../../Services/account/item-service';
import { ComponentsModule } from '../../components/components.module';
import { ChatService } from '../chat-detail/chat-service';
import { MomentModule } from 'ngx-moment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatListPageRoutingModule,
    ComponentsModule,
    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        'm': 59
      }
    }),

  ],
  declarations: [ChatListPage],
  providers:[ItemService,ChatService]
})
export class ChatListPageModule {}
