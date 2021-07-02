import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonRouterOutlet, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FirebaseAuthService } from '../../firebase/auth/firebase-auth.service';
import { UserService } from '../../Services/account/user.service';
import { UserProfileModel } from '../../user/profile/user-profile.model';
import { IResolvedRouteData, ResolverHelper } from '../../utils/resolver-helper';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.page.html',
  styleUrls: [
    './styles/firebase-user-details.page.scss',
    './styles/firebase-user-details.shell.scss'
  ],
})
export class ProfileHomePage implements OnInit {

  // Gather all component subscription in one place. Can be one Subscription or multiple (chained using the Subscription.add() method)
  subscriptions: Subscription;

  profile: UserProfileModel;
  available_languages = [];
  translations;
  currentModal=null;

  @HostBinding('class.is-shell') get isShell() {
    return (this.profile && this.profile.isShell) ? true : false;
  }

  constructor(
    private route: ActivatedRoute,
    public alertController: AlertController,
    private userService : UserService,
    private authService:FirebaseAuthService,
    private router:Router,
    private routerOutlet :IonRouterOutlet,
    private modalController :ModalController
  ) { }


  ngOnInit(): void {
    this.subscriptions = this.userService.getProfileDataSource()
    .subscribe((state) => {
      this.profile = state;
    }, (error) => console.log(error));
  }


  // NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
  // Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions
  ionViewWillLeave(): void {
    this.subscriptions.unsubscribe();
  }
  profileClick(){
    
  }

  signOut() {
    this.authService.signOut().subscribe(() => {
      // Sign-out successful.
      // Replace state as we are no longer authorized to access profile page.
      this.router.navigate(['firebase/auth/sign-in'], { replaceUrl: true });
    }, (error) => {
      console.log('signout error', error);
    });
  }



  async createModal() {
    const modal = await this.modalController.create({
      component: ProfileSettingComponent,
      animated:true,
      backdropDismiss:true,
      showBackdrop:true,
      swipeToClose:true,
      presentingElement : this.routerOutlet.nativeEl,
      mode:'ios'

    });

    await modal.present();
    this.currentModal = modal;
  
  }
}
