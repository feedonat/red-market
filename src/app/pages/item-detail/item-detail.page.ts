import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonRouterOutlet, isPlatform, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs/internal/Observable';
import { ItemFireStore } from '../item/Item-service';
import { OfferComponent } from '../offer/offer.component';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {


  items:Observable<any>;
  itemId =null;
  details:any
  showToolbar = false;
  showFooter = false;
  btnBgColor = '--ion-color-step-150';
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
    private itemService :ItemFireStore,
    private modalController:ModalController,
    private router:Router,
    private routerOutlet: IonRouterOutlet,
    private route: ActivatedRoute,
    ) { 
      this.itemId= this.route.snapshot.paramMap.get('id');
    }

  ngOnInit() {

    this.itemId = this.route.snapshot.paramMap.get("id");
    console.log("item ID ngoninit " + this.itemId);

    this.itemService.getOneItem(this.itemId).subscribe(item=>{
      console.log(JSON.stringify(item));
      this.details = item;
      console.log('ITEM DETAIL +++++ '+JSON.stringify(this.details));
    });
   
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
      this.showFooter = scrollTop >= 590;
    }else{
      this.transition = false;
    }
  }

  backClicked(){
    this.router.navigateByUrl("redmarket/items");
  }

  getPublicProfile(){
    this.router.navigateByUrl("/public-profile");
  }

  chat(){
    this.router.navigate(["/redmarket/chat/detail",{ id:this.itemId,saler: JSON.stringify(this.details?.poster), itemImg:this.details.images[0],price:this.details.price}])
  }

}
