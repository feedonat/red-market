import { Component, NgZone, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import dayjs from 'dayjs';
import { FirebaseUserModel } from '../../../firebase/crud/user/firebase-user.model';
import { CheckboxCheckedValidator } from '../../../validators/checkbox-checked.validator';

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.scss'],
})
export class ProfileSettingComponent implements OnInit {

  headerTitle = "";
  createUserForm:FormGroup;
  userData: FirebaseUserModel = new FirebaseUserModel();
  constructor(
    private modalController: ModalController,
    public alertController: AlertController,
    public router: Router,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
        // default image
        this.userData.avatar = 'https://s3-us-west-2.amazonaws.com/ionicthemes/otros/avatar-placeholder.png';

        this.createUserForm = new FormGroup({
          name: new FormControl('', Validators.required),
          lastname: new FormControl('', Validators.required),
          email: new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
          ])),
          phone: new FormControl('', Validators.required),
          birthdate: new FormControl(null, Validators.required),
          skills: new FormArray([], CheckboxCheckedValidator.minSelectedCheckboxes(1)),
          spanish: new FormControl(),
          english: new FormControl(),
          french: new FormControl()
        
  })
}

changeUserImage(){

}

createUser(){
  
}
  dismissModal() {
    if (this.modalController) {
      this.modalController.dismiss().then(() => { this.modalController = null; });
    }
  }
}
