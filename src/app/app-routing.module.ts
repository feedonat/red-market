import { NgModule } from '@angular/core';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { map } from 'rxjs/operators';
import { TabsPage } from './pages/tabs/tabs.page';

// Firebase guard to redirect logged in users to profile
const redirectLoggedInToProfile = (next) => map(user => {
  // when queryParams['auth-redirect'] don't redirect because we want
  // the component to handle the redirection
  if (user !== null && !next.queryParams['auth-redirect']) {
    return ['redmarket/items'];
  } else {
    return true;
  }
});
const routes: Routes = [


  {
    path: 'redmarket',
    component: TabsPage,
    children:[
  
      {  
        path:'home',
        children: [
    
          {
            path: '',
            loadChildren: () => import('./pages/tab1/tab1.module').then(m => m.Tab1PageModule)
          },
        ]
      },

    {
    path: 'items',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/tab1/tab1.module').then(m => m.Tab1PageModule)
      },

      {
        path: 'list',
        loadChildren: ()=> import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
      },
      {
        path: 'detail/:id',
        loadChildren: () => import('./pages/item-detail/item-detail.module').then( m => m.ItemDetailPageModule)
      },
      {
        path: '',
        redirectTo: 'redmarket/items',
        pathMatch: 'full'
      }
    ]
  },


{

  path: 'chat',
  children: [
    {
      path: '',
      loadChildren: () => import('./pages/chat-list/chat-list.module').then( m => m.ChatListPageModule)
    },
    {
      path: 'list',
      loadChildren: () => import('./pages/chat-list/chat-list.module').then( m => m.ChatListPageModule)
    },
    {
      path: ':id',
      loadChildren: () => import('./pages/chat-detail/chat-detail.module').then( m => m.ChatDetailPageModule)
    },
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full'
    }
  ]
},
{
path: 'selling',
children: [
  {
    path: '',
    loadChildren: () => import('./pages/selling/selling.module').then( m => m.SellingPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/selling/selling.module').then( m => m.SellingPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./pages/selling-item/selling-item.module').then( m => m.SellingItemPageModule)
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
]
},


  {
    path: 'profile',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/profile-home/profile-home.module').then( m => m.ProfileHomePageModule)
      },
    
      {
        path: 'auth',
        loadChildren: () => import('./firebase/auth/firebase-auth.module').then(m => m.FirebaseAuthModule)
      },
      {
        path: 'sign-up',
        loadChildren: () => import('../app/firebase/auth/sign-up/firebase-sign-up.module').then(m => m.FirebaseSignUpPageModule)
      },
      {
        path: 'user',
        loadChildren: () => import('../app/firebase/auth/profile/firebase-profile.module').then(m => m.FirebaseProfilePageModule)
      },
      {
        path: 'public',
        loadChildren: () => import('./pages/public-profile/public-profile.module').then( m => m.PublicProfilePageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./pages/account-setting/account-setting.module').then( m => m.AccountSettingPageModule)
      },
    ]
    },
  ]
  
  },
  {
    path: '',
    redirectTo: '/redmarket/items',
    pathMatch: 'full'
  },

  {
    path: 'onboarding',
    loadChildren: () => import('./pages/onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
