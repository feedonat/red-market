import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/Services/account/user.service';
import { UserProfileModel } from 'src/app/user/profile/user-profile.model';
import { DataStore } from '../../shell/data-store';


@Injectable()
export class UserProfileResolver implements Resolve<DataStore<UserProfileModel>> {

  constructor(private userService: UserService) { }

  resolve(): DataStore<UserProfileModel> {
    const dataSource: Observable<UserProfileModel> = this.userService.getProfileDataSource();
    const dataStore: DataStore<UserProfileModel> = this.userService.getProfileStore(dataSource);

    return dataStore;
  }
}
