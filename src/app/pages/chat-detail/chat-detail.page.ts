import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { ItemService } from '../../Services/account/item-service';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.page.html',
  styleUrls: ['./chat-detail.page.scss'],
})
export class ChatDetailPage implements OnInit {

  items: Observable<any>;
  rangeForm: FormGroup;
  searchQuery: string;
  showAgeFilter = false;
  optionItems = [ {active:false},];
  constructor(
    private itemService : ItemService,
    private router :Router
  ) { }

  ngOnInit() {

    this.itemService.getItems().subscribe((data) => {
      console.log(JSON.stringify(data))
      this.items = data;
  
    })
  }

  toggleClass(item){
    item.active = !item.active;
  }
}
