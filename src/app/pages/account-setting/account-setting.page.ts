import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonRouterOutlet, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.page.html',
  styleUrls: ['./account-setting.page.scss'],
})
export class AccountSettingPage implements OnInit {

  currentModal =null;

  constructor(
    private routerOutlet :IonRouterOutlet,
    private modalController :ModalController
  ) { }

  ngOnInit() {
  }


}
