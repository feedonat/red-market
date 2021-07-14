import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Observable } from 'rxjs/internal/Observable';
import { ItemService } from '../../Services/account/item-service';

@Component({
  selector: 'app-selling-item',
  templateUrl: './selling-item.page.html',
  styleUrls: ['./selling-item.page.scss'],
})
export class SellingItemPage implements OnInit {
  msgs: Observable<any>;
  constructor(


      private itemService : ItemService,
      private router :Router,
    private actionSheetController : ActionSheetController
  ) { }

  ngOnInit() {
    this.itemService.getItems().subscribe((data) => {
      console.log(JSON.stringify(data))
      this.msgs = data;
  
    })
  }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


}
