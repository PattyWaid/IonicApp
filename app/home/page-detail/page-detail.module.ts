import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageDetailPageRoutingModule } from './page-detail-routing.module';

import { PageDetailPage } from './page-detail.page';
import { TabsDetailsComponent } from './tabs-details/tabs-details.component';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageDetailPageRoutingModule,
    ],
  declarations: [PageDetailPage, TabsDetailsComponent],
  entryComponents:[
  ]

})
export class PageDetailPageModule {}