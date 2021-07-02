import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellingItemPageRoutingModule } from './selling-item-routing.module';

import { SellingItemPage } from './selling-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellingItemPageRoutingModule
  ],
  declarations: [SellingItemPage]
})
export class SellingItemPageModule {}
