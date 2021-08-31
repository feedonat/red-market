import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { map } from 'rxjs/operators';
import { Tab1PageModule } from '../tab1/tab1.module';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'items',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: Tab1PageModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
