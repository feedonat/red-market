import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, ReplaySubject, Subscription } from "rxjs";
import { FirebaseListingItemModel } from "../../firebase/crud/listing/firebase-listing.model";
import { DataStore } from "../../shell/data-store";
import { ItemService } from "../../Services/account/item-service";
import { IonSearchbar, LoadingController } from "@ionic/angular";
import { finalize } from "rxjs/operators";
import { HomePageService } from "./HomePage-Service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss", "search-ios.scss"],
})
export class Tab1Page implements OnInit {
  rangeForm: FormGroup;
  searchQuery: string;
  showAgeFilter = false;
  viewEntered = false;
  categories = [];
  category_bg = ''
  searchClicked = false;
  slidesOptions: any = {
    slidesPerView: 4.5,
    freeMode:true,
    zoom: {
      toggle: false, // Disable zooming to prevent weird double tap zomming on slide images
    }
  };
  @ViewChild(IonSearchbar,{ static: true }) searchBar: IonSearchbar;
  searchSubject: ReplaySubject<any> = new ReplaySubject<any>(1);
  searchFiltersObservable: Observable<any> = this.searchSubject.asObservable();

  listingDataStore: DataStore<Array<FirebaseListingItemModel>>;
  stateSubscription: Subscription;

  items: Observable<any>;
  constructor(
    private itemService: ItemService,
    private router: Router,
    private loadingController: LoadingController,
    private homePageService :HomePageService
  ) {}
  ngOnInit(): void {

    this.categories.push('Electronics')
    this.categories.push('Mobile')
    this.categories.push('Furniture')
    this.categories.push('House Hold')
    this.categories.push('Shose&Closing')
    this.categories.push('Baby&Kids')
    this.categories.push('Car')
    this.categories.push('Toys&Games')
    this.categories.push('Sport&outdoor')
    this.categories.push('House&Aps')
    this.categories.push('Indoor out door decorations')
    this.searchQuery = "";
    this.rangeForm = new FormGroup({
      dual: new FormControl({ lower: 1, upper: 100 }),
    });
    this.items = this.homePageService.getAllItems();
    this.homePageService.getAllItems().subscribe(item=>{
      console.log("ITEMS ARE "+item);
    })
    
  }

  ionViewDidEnter() {
    this.viewEntered = true;
}

  searchList() {
    this.searchSubject.next({
      lower: this.rangeForm.controls.dual.value.lower,
      upper: this.rangeForm.controls.dual.value.upper,
      query: this.searchQuery,
    });
  }

  getItemDetail() {
    this.router.navigateByUrl("/item-detail");
  }

  categoryClicked(){
   this.category_bg = 'primary'
  }

  itemDetail(id) {
    this.router.navigate(
      [`redmarket/items/${id}`]
    )
  }

  close(){
    this.searchClicked = false;
  }

  searchClick(){
    this.searchClicked = true;
  }

}
