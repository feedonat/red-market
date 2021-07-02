import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { ItemService } from '../../Services/account/item-service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.page.html',
  styleUrls: ['./chat-list.page.scss','./chat-list.page.ios.scss'],
})
export class ChatListPage implements OnInit {

  items: Observable<any>;
  rangeForm: FormGroup;
  searchQuery: string;
  showAgeFilter = false;
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

}
