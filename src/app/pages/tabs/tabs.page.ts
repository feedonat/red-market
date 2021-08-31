import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { createAnimation, ModalController } from '@ionic/angular';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private modalController:ModalController,private router: Router) {}
  currentModal = null;
 

    async createItemModal() {
    const modal = await this.modalController.create({
      component: ItemComponent,
      animated:true,
      mode:'ios',
      swipeToClose:true

    });

    await modal.present();
    this.currentModal = modal;
  
  }



  profileClick(){
    this.router.navigateByUrl('redmarket/profile');
  }

chatsClicked(){
  this.router.navigateByUrl('/chats')
}

}
