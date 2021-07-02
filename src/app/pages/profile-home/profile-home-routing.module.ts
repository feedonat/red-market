import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProfileHomePage } from './profile-home.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileHomePage
  }
];

@NgModule({
  imports: [IonicModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileHomePageRoutingModule {}
