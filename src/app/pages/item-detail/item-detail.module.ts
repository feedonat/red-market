import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemDetailPageRoutingModule } from './item-detail-routing.module';

import { ItemDetailPage } from './item-detail.page';
import { ComponentsModule } from '../../components/components.module';
import { ItemService } from '../../Services/account/item-service';
import { OfferComponent } from '../offer/offer.component';
import { ItemFireStore } from '../item/Item-service';
import { ChatService } from '../chat-detail/chat-service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemDetailPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ItemDetailPage,OfferComponent],
  providers: [ItemService,ItemFireStore,ChatService],
  exports:[OfferComponent]
})
export class ItemDetailPageModule {}
