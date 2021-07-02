import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, isPlatform, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs/internal/Observable';
import { ItemService } from '../../Services/account/item-service';
import { OfferComponent } from '../offer/offer.component';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {


  items:Observable<any>;
  details:any
  showToolbar = false;
  showFooter = false;
  heartType: string = "heart-outline";
  transition: boolean = false;
  slidesOptions: any = {
    zoom: {
      toggle: false // Disable zooming to prevent weird double tap zomming on slide images
    }
  };

  @HostBinding('class.is-shell') get isShell() {
    return (this.details && this.details.isShell) ? true : false;
  }
  constructor(
    private itemService :ItemService,
    private modalController:ModalController,
    private router:Router,
    private routerOutlet: IonRouterOutlet
    ) { }

  ngOnInit() {
    this.itemService.getOneItem().subscribe(item=>{
      console.log(JSON.stringify(item));
      this.details = item;
    });

    this.itemService.getItems().subscribe((data) => {
      this.items = data;
  
    })
   
  }
  currentModal = null;
 

    async createModal() {
    const modal = await this.modalController.create({
      component: OfferComponent,
      animated:true,
      backdropDismiss:true,
      showBackdrop:true,
      swipeToClose:true,
      presentingElement : this.routerOutlet.nativeEl,
      mode:'ios'

    });

    await modal.present();
    this.currentModal = modal;
  
  }

  onScroll($event: CustomEvent) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.transition = true;
      this.showToolbar = scrollTop >= 250;
      this.showFooter = scrollTop >= 540;
    }else{
      this.transition = false;
    }
  }

  backClicked(){
    this.router.navigateByUrl("/home/tab1")
  }

  getPublicProfile(){
    this.router.navigateByUrl("/public-profile");
  }

}
