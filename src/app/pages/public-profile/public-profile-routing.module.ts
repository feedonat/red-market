import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicProfilePage } from './public-profile.page';

const routes: Routes = [
  {
    path: '',
    component: PublicProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicProfilePageRoutingModule {}
