import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from "rxjs/internal/Observable";
import * as firebase from "firebase/app";
import { map } from "rxjs/internal/operators/map";
import { switchMap } from "rxjs/internal/operators/switchMap";
import { of } from "rxjs/internal/observable/of";
@Injectable()
export class ItemFireStore {
    task: AngularFireUploadTask;
    snapshot: Observable<any>;
    user: any = null;
  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private storage: AngularFireStorage
  ) {}

 async addNewItem(user,item,imagesUrl: any[]) {
    item.poster = user;
    item.images =[];
    item.likes = [];
    item.prices =[];
    item.offers =[];
    let documentId = null;
    return this.afs.collection('items').add(item).then(ref => {
        documentId = ref.id;  
        for(var i=0;i<imagesUrl.length;i++){
            this.imageUpload(imagesUrl[i],documentId,i);
        }
    })
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
 imageUpload(file,docId,index) {

    //storageRef = this.storage.ref(`items/${documentId}_${index}`);
    //this.task = storageRef.putString(img, 'base64', { contentType: 'image/png'});
    const storageRef = this.storage.ref(`items/${docId}/${index}`);
  
    // [START storage_monitor_upload]
    var uploadTask = storageRef.putString(file, 'base64', { contentType: 'image/png'}).task;
  
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        // Handle unsuccessful uploads
      }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          this.afs.doc(`items/${docId}`).update({images: firebase.firestore.FieldValue.arrayUnion(downloadURL) });
        });
      }
    );
    // [END storage_monitor_upload]
  }
  getAllItems() {
    return this.afs.collection('items').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        console.log("ITEMS OF COLL"+JSON.stringify(Object.assign(id, data)));
        return Object.assign(id, data);

      }))
    )
  }
  getOneItem(id) {
    return this.afs.doc(`items/${id}`).valueChanges();
  }

  }