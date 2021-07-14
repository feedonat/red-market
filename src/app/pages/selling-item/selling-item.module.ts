import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellingItemPageRoutingModule } from './selling-item-routing.module';

import { SellingItemPage } from './selling-item.page';
import { ItemService } from '../../Services/account/item-service';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    SellingItemPageRoutingModule
  ],
  declarations: [SellingItemPage],
  providers: [ItemService],
})
export class SellingItemPageModule {}
