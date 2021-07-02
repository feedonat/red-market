import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseAuthService } from 'src/app/Services/auth/firebase-auth.service';
import { DataStore } from 'src/app/shard/shell/data-store';
import { FirebaseProfileModel } from './firebase-profile.model';

@Injectable()
export class FirebaseProfileResolver implements Resolve<any> {

  constructor(private firebaseAuthService: FirebaseAuthService) {}

  resolve() {
    const dataSource: Observable<FirebaseProfileModel> = this.firebaseAuthService.getProfileDataSource();
    const dataStore: DataStore<FirebaseProfileModel> = this.firebaseAuthService.getProfileStore(dataSource);
    return dataStore;
  }
}
