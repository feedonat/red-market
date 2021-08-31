import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatDetailPageRoutingModule } from './chat-detail-routing.module';
import { MomentModule } from 'ngx-moment';
import { ChatDetailPage } from './chat-detail.page';
import { ItemService } from '../../Services/account/item-service';
import { ChatService } from './chat-service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ChatDetailPageRoutingModule,
    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        'm': 59
      }
    }),
  ],
  declarations: [ChatDetailPage],
  providers:[ItemService,ChatService]
})
export class ChatDetailPageModule {}
