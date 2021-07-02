import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatListPage } from './chat-list.page';

const routes: Routes = [
  {
    path: '',
    component: ChatListPage
  },
  {
    path: 'detail',
    loadChildren: () => import('../chat-detail/chat-detail.module').then( m => m.ChatDetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatListPageRoutingModule {}
