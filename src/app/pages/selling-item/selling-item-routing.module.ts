import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellingItemPage } from './selling-item.page';

const routes: Routes = [
  {
    path: '',
    component: SellingItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellingItemPageRoutingModule {}
