import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from "rxjs/internal/Observable";
import * as firebase from "firebase/app";
import { map } from "rxjs/internal/operators/map";
@Injectable()
export class HomePageService {
    task: AngularFireUploadTask;
    snapshot: Observable<any>;
  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private storage: AngularFireStorage
  ) {}

  getAllItems() {
    return this.afs.collection('items').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data:any = a.payload.doc.data();
        const id = a.payload.doc.id;
        console.log("OBJECT RETURNED IS ::::: "+JSON.stringify({ id, ...data }))
        return { id, ...data };
       

      }))
    )
  }

  }