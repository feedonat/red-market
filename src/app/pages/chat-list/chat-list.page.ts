import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { from } from 'rxjs/internal/observable/from';
import { ItemService } from '../../Services/account/item-service';
import { ChatService } from '../chat-detail/chat-service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.page.html',
  styleUrls: ['./chat-list.page.scss','./chat-list.page.ios.scss'],
})
export class ChatListPage implements OnInit {

  chats: any[];
  chatsForDisplay: any[] = [];

  messages :Observable<any> ;
  sent : Observable<any>
  received: Observable<any>;

  rangeForm: FormGroup;
  searchQuery: string;
  showAgeFilter = false;
  currentUser = null;
  constructor(
    private chatService : ChatService,
    private router :Router
  ) { }

  ngOnInit() {

    // return combineLatest<any[]>(received, sent).pipe(
    //   map((arr) => arr.reduce((acc, cur) => acc.concat(cur)))
    // );

    this.chatService.getCurrentUser().subscribe(user=>{
      this.currentUser=user.uid
      this.chatService.getAllReceiveMsgs(user.uid).subscribe(msgs=>{
       console.log('MSGGG FOREACH=='+JSON.stringify(msgs));
        this.chats = msgs
        console.log('MESSAGE for user '+user.uid+' ======= '+JSON.stringify(msgs))
     });
    });

  }

  chatUser(chat){
    if(chat.sender.uid==this.currentUser){
      chat.item.poster = chat.receiver;
    }
    if(chat.receiver.uid==this.currentUser){
      chat.item.poster = chat.sender;
    }
    console.log('CHAT DETAIL ++++++++++++++ '+JSON.stringify(chat))
    this.router.navigate(["/redmarket/chat/detail",{  item: JSON.stringify( chat.item),chatId:chat.chatId,routedFromChatList : true }])
  }
}

