import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { observable } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ItemService } from '../../Services/account/item-service';

@Component({
  selector: 'app-selling',
  templateUrl: './selling.page.html',
  styleUrls: ['./selling.page.scss','./selling.page.ios.scss'],
})
export class SellingPage implements OnInit {

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

  searchList(){

  }

  close(){
    this.router.navigateByUrl("/home")
  }

}
