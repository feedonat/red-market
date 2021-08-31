import { Injectable, Inject, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomController } from '@ionic/angular';

interface ThemeStyle {
  themeVariable: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }
  ngOnInit(): void {
     this.messageEmmiter.emit(false);
  }
  dark = false;
  messageEmmiter = new EventEmitter()
  changeTheme(){
    document.body.classList.add('dark')
    this.dark = this.dark?false:true;
    if(this.dark){
      document.body.classList.add('dark')
    }else{
      document.body.classList.remove('dark')
    }
     this.messageEmmiter.emit(this.dark);
     console.log(this.dark);
  }
}
