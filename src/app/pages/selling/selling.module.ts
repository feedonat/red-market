import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellingPageRoutingModule } from './selling-routing.module';

import { SellingPage } from './selling.page';
import { ItemService } from '../../Services/account/item-service';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellingPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [SellingPage],
  providers: [ItemService],
})
export class SellingPageModule {}
