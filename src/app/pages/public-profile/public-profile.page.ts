import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map, take } from 'rxjs/operators';
import { ItemService } from '../../Services/account/item-service';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.page.html',
  styleUrls: ['./public-profile.page.scss'],
})
export class PublicProfilePage implements OnInit {

  items: Observable<any>;
  reviews = [];
  constructor(private itemService:ItemService) { }

  ngOnInit() {

    this.reviews.push("Friendly");
    this.reviews.push("On time");
    this.reviews.push("Communicative");
    this.reviews.push("Item as described");
    this.items = this.itemService.getItems().pipe(take(10));
   
  }
  
}
