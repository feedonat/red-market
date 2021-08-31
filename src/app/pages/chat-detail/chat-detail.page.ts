import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ChatService } from './chat-service';
import { forkJoin } from 'rxjs';
import { from } from 'rxjs/internal/observable/from';
import firebase from 'firebase';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.page.html',
  styleUrls: ['./chat-detail.page.scss'],
})
export class ChatDetailPage implements OnInit {

  msgList: any[];
  chat:Observable<any>;
  rangeForm: FormGroup;
  searchQuery: string;
  msgForm : FormGroup;
  currentUser = null;
  routedFromChatList= null;
  item =null;
  user = null;
  chatid = null;
  showAgeFilter = false;
  optionItems = [ {active:false},];
  constructor(
    private chatService : ChatService,
    private router :Router,
    private route :ActivatedRoute,
    private fb:FormBuilder,
    private afAuth: AngularFireAuth,
  ) { }

   ngOnInit() {
    this.item = new Object();
    this.item.price = this.route.snapshot.paramMap.get('price');
    this.item.img = this.route.snapshot.paramMap.get('itemImg');
    this.item.id = this.route.snapshot.paramMap.get('id');
    this.item.poster =  JSON.parse(this.route.snapshot.paramMap.get('saler'));
    this.chatid = this.route.snapshot.paramMap.get('chatId');
    this.routedFromChatList = this.route.snapshot.paramMap.get('routedFromChatList');
    console.log(  'routed from '+this.routedFromChatList +'    and item from router +++++++ '+JSON.stringify(this.item));

    this.msgForm = this.fb.group({
      'txtMsg': ["", Validators.required],
    });

   if(null!=this.routedFromChatList){

    console.log('FROM CHAT LIST _______________________________________________'+JSON.parse(this.route.snapshot.paramMap.get('item')))
    this.item = JSON.parse(this.route.snapshot.paramMap.get('item'));
    this.chatid = this.route.snapshot.paramMap.get('chatId');
    this.chatService.getCurrentUser().subscribe(user=>{
      console.log('CURRRRRRENT USER ************'+JSON.stringify( user))
      this.currentUser = user;
       this.chatService.chatListGetMsgs(this.chatid).subscribe(result=>{
         this.msgList = result[0]['msgs'];
         console.log('MSG LIST from this user and item'+JSON.stringify(this.msgList));
       });
    });
   }else{

    console.log('FROM ITEM DETAIL PAGE_______________________________________________')
    this.chatService.getCurrentUser().subscribe(user=>{
      console.log('CURRRRRRENT USER ************'+JSON.stringify( user))
      this.currentUser = user;
       this.chatService.getMsgs(this.item,user.uid).subscribe(result=>{
         this.msgList = result[0]['msgs'];
         console.log('MSG LIST from this user and item'+JSON.stringify(this.msgList));
       });
    });

   }




  }



  addMsg() {
    console.log("submited form ");
    this.chatService.sendMsg( this.item, this.msgForm.value,this.item.poster,this.currentUser ,this.chatid);
    this.msgForm.reset();
    //this.resize();
    //this.scrollToBottomOnInit();
  }


  toggleClass(item){
    item.active = !item.active;
  }
}
