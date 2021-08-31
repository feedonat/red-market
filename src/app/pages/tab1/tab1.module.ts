import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ItemService } from '../../Services/account/item-service';
import { ImagePicker } from '@ionic-native/image-picker';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ItemFireStore } from '../item/Item-service';
import { HomePageService } from './HomePage-Service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    AngularFireStorageModule,
  ],
  declarations: [Tab1Page],
  providers: [ItemService,HomePageService,ItemFireStore],
})
export class Tab1PageModule {}
