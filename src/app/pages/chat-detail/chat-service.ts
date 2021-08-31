import { Injectable, MissingTranslationStrategy } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from "@angular/fire/storage";
import { Observable } from "rxjs/internal/Observable";
import * as firebase from "firebase/app";
import { map } from "rxjs/internal/operators/map";
import { switchMap } from "rxjs/internal/operators/switchMap";
import { of } from "rxjs/internal/observable/of";
import { forkJoin } from "rxjs/internal/observable/forkJoin";
import { combineLatest, from } from "rxjs";
import { flatMap } from "rxjs/operators";

@Injectable()
export class ChatService {
  task: AngularFireUploadTask;
  snapshot: Observable<any>;
  user: any = null;
  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {}

  sendMsg(docId, txt, itemSaler, buyer, chatid) {
    let msg: any = new Object();
    let chatId =
      chatid == null
        ? itemSaler.uid + "_" + buyer.uid + "_" + docId.id
        : chatid;
    msg.chatID = chatId;
    msg.item = docId.id;
    let createdDate = firebase.firestore.FieldValue.serverTimestamp();
    msg.created = createdDate;
    msg.sender = buyer;
    msg.txt = txt.txtMsg;
    let msgArray: any[] = [];
    console.log("chat message " + JSON.stringify(msg));
    let documentId = null;
    this.afs
      .collection("messages")
      .add(msg)
      .then((ref) => {
        documentId = ref.id;
        msgArray.push(documentId);

        this.afs
          .doc(`chats/${chatId}`)
          .get()
          .subscribe((result) => {
            if (result.exists) {
              this.afs.collection("chats").doc(chatId).update({
                lmsg: txt.txtMsg,
                created: createdDate,
              });
            } else {
              this.afs.collection("chats").doc(chatId).set({
                chatId: chatId,
                sender: buyer,
                receiver: itemSaler,
                item: docId,
                lmsg: txt.txtMsg,
                created: createdDate,
              });
            }
          });
      });
  }
  //this.afs.doc(`chats/${docId}`).update({messages: firebase.firestore.FieldValue.arrayUnion({sender: sender ,created:firebase.firestore.FieldValue.serverTimestamp(),txt:txt}) });

  getAllReceiveMsgs(user) {
    const received = this.afs
      .collection<any>("chats", (ref) =>
        ref.where("receiver.uid", "==", user).orderBy("created", "desc")
      ).valueChanges();

    const sent = this.afs
      .collection<any>("chats", (ref) =>
        ref.where("sender.uid", "==", user).orderBy("created", "desc")
      ).valueChanges();

      return combineLatest<any[]>(received, sent).pipe(
      map((arr) => arr.reduce((acc, cur) => acc.concat(cur)))
    );
  }

  getAllSentMsgs(user) {
    console.log("UUUUUUUUUSER" + user);
    return this.afs
      .collection<any>("chats", (ref) =>
        ref.where("sender.uid", "==", user).orderBy("created", "desc")
      )
      .valueChanges();
  }
  chatListGetMsgs(chat_Id) {
    console.log("MSGGGGGG DATA " + chat_Id);
    return this.afs
      .collection<any>("chats", (ref) => ref.where("chatId", "==", chat_Id))
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            console.log(
              "########## Chat ############# =" + JSON.stringify(data)
            );
            return this.afs
              .collection<any>("messages", (ref) =>
                ref.where("chatID", "==", id).orderBy("created", "asc")
              )
              .valueChanges()
              .pipe(
                map((msgs) => {
                  console.log(
                    "+++++++++++++++++  message List +++++++++++++++ " +
                      JSON.stringify({ id, msgs: msgs, ...data })
                  );
                  return Object.assign({ id, msgs: msgs, ...data });
                })
              );
          });
        }),
        flatMap((posts) => combineLatest(posts))
      );
  }


  getMsgs(item, sender) {
    console.log("");
    //let sender = (await this.afAuth.currentUser).uid;
    let chatId = item.poster.uid + "_" + sender + "_" + item.id;
    console.log("MSGGGGGG DATA " + chatId);
    return this.afs
      .collection<any>("chats", (ref) => ref.where("chatId", "==", chatId))
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            console.log(
              "########## Chat ############# =" + JSON.stringify(data)
            );
            return this.afs
              .collection<any>("messages", (ref) =>
                ref.where("chatID", "==", id).orderBy("created", "asc")
              )
              .valueChanges()
              .pipe(
                map((msgs) => {
                  console.log(
                    "+++++++++++++++++  message List +++++++++++++++ " +
                      JSON.stringify({ id, msgs: msgs, ...data })
                  );
                  return Object.assign({ id, msgs: msgs, ...data });
                })
              );
          });
        }),
        flatMap((posts) => combineLatest(posts))
      );
  }

  async getAllReceiveMessages() {
    let sender = (await this.afAuth.currentUser).uid;
    return this.afs.collection(`chats`).ref.where("receiver.uid", "==", sender);
  }
  getOneItem(id) {
    return this.afs.doc(`items/${id}`).valueChanges();
  }

  getCurrentUser() {
    this.user = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs
            .doc(`users/${user.uid}`)
            .valueChanges({ idField: "uid" });
        } else {
          return of(null);
        }
      })
    );
    return this.user;
  }

  async addNewMsg(item, imagesUrl: any[]) {
    item.poster = (await this.afAuth.currentUser).uid;
    item.images = [];
    item.likes = [];
    item.prices = [];
    item.offers = [];
    let documentId = null;
    return this.afs
      .collection("messages")
      .add(item)
      .then((ref) => {
        documentId = ref.id;
      });
  }
}
