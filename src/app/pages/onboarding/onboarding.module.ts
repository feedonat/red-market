import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnboardingPageRoutingModule } from './onboarding-routing.module';

import { OnboardingPage } from './onboarding.page';
import { FirebaseAuthService } from '../../firebase/auth/firebase-auth.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../../environments/environment';
import { FirebaseSignInPage } from '../../firebase/auth/sign-in/firebase-sign-in.page';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { map } from 'rxjs/operators';

// Firebase guard to redirect logged in users to profile
const redirectLoggedInToProfile = (next) => map(user => {
  // when queryParams['auth-redirect'] don't redirect because we want
  // the component to handle the redirection
  if (user !== null && !next.queryParams['auth-redirect']) {
    return ['home/'];
  } else {
    return true;
  }
});

const routes: Routes = [
  {
    path: '',
    component: FirebaseSignInPage,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToProfile }
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    OnboardingPageRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  declarations: [OnboardingPage],
  providers:[FirebaseAuthService]
})
export class OnboardingPageModule {}
