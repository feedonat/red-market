import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/internal/operators/finalize';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss'],
})
export class UploadTaskComponent implements OnInit {

  @Input() file: any;
  task: AngularFireUploadTask;
  @Output() urlEventEmitter = new EventEmitter<string>();
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  ngOnInit() {
    this.startUpload();
  }

  onUrlChange () {

    this.urlEventEmitter.emit(this.downloadURL);
    console.log("::::::::::on url change called" +this.downloadURL)
  }
  startUpload() {
    console.log("::::::::::on file from parent  is " +this.file)

    // The storage path
    const path = `items/${Date.now()}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    //const uploadTask = storageRef.putString(coverImg, 'base64', { contentType: 'image/png'});
    this.task = ref.putString(this.file, 'base64', { contentType: 'image/png'});

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize( async() =>  {
        this.downloadURL = await ref.getDownloadURL().toPromise();
        this.onUrlChange();
        this.db.collection('files').add( { downloadURL: this.downloadURL, path });
      }),
    );
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}
