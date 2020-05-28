import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsDetailsComponent } from './home/page-detail/tabs-details/tabs-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    children: [{
      path: '',
      loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
  /*  {
      path: ':id',
      loadChildren: () => import('./home/page-detail/page-detail.module').then(m => m.PageDetailPageModule)
    }, */
    {
      path: ':id/content',
      //component: TabsDetailsComponent 
      loadChildren: () => import('./home/page-detail/page-detail.module').then(m => m.PageDetailPageModule)
     },
     
    {
      path: ':id/gallery',
      //component: TabsDetailsComponent 
      loadChildren: () => import('./home/page-detail/page-detail.module').then(m => m.PageDetailPageModule)
    },
    {
      path: ':id/comments',
      //component: TabsDetailsComponent 
      loadChildren: () => import('./home/page-detail/page-detail.module').then(m => m.PageDetailPageModule)
    },
    {
      path: ':id/about',
      //component: TabsDetailsComponent 
      loadChildren: () => import('./home/page-detail/page-detail.module').then(m => m.PageDetailPageModule)
    }]  
  },
    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
