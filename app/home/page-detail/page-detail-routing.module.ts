import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageDetailPage } from './page-detail.page';
import { TabsDetailsComponent } from './tabs-details/tabs-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: PageDetailPage
      },
      {
        path: 'content',
        //component: PageDetailPage,
        //loadChildren: () => import('./tabs-details/tabs-details.module').then(m => m.TabsDetailModule),
      },
      
      {
        path: 'gallery',
        //component: PageDetailPage,
        //loadChildren: () => import('./tabs-details/tabs-details.module').then(m => m.TabsDetailModule)
      },
      {
        path: 'comments',
        //component: TabsDetailsComponent,
        //loadChildren: () => import('./tabs-details/tabs-details.module').then(m => m.TabsDetailModule)
      },
      {
        path: 'about',
        //component: TabsDetailsComponent,
        //loadChildren: () => import('./tabs-details/tabs-details.module').then(m => m.TabsDetailModule)
      }
    ]
    
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageDetailPageRoutingModule {}
