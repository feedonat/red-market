import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, ReplaySubject, Subscription } from "rxjs";
import { FirebaseListingItemModel } from "../../firebase/crud/listing/firebase-listing.model";
import { DataStore } from "../../shell/data-store";
import { ItemService } from "../../Services/account/item-service";
import { LoadingController } from "@ionic/angular";
import { finalize } from "rxjs/operators";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss", "search-ios.scss"],
})
export class Tab1Page implements OnInit {
  rangeForm: FormGroup;
  searchQuery: string;
  showAgeFilter = false;

  searchSubject: ReplaySubject<any> = new ReplaySubject<any>(1);
  searchFiltersObservable: Observable<any> = this.searchSubject.asObservable();

  listingDataStore: DataStore<Array<FirebaseListingItemModel>>;
  stateSubscription: Subscription;

  items: Observable<any>;
  constructor(
    private itemService: ItemService,
    private router: Router,
    private loadingController: LoadingController
  ) {}
  ngOnInit(): void {
    this.searchQuery = "";
    this.rangeForm = new FormGroup({
      dual: new FormControl({ lower: 1, upper: 100 }),
    });

    this.itemService.getItems().subscribe((data) => {
      this.items = data;
  
    })
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
}
