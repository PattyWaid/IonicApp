import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';


import { HomePageRoutingModule } from './home-routing.module';
import { PostFormPageModule } from './post-form/post-form.module';
import { PostFormPage } from './post-form/post-form.page';
import { CommonPipe} from '../appwide-pipes.pipe';





@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule,
    PostFormPageModule, 
  ],
  declarations: [HomePage, CommonPipe],
  entryComponents: [PostFormPage],
})
export class HomePageModule {}
