import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';


import { HomePageRoutingModule } from './home-routing.module';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostFormPageModule } from './post-form/post-form.module';
import { PostFormPage } from './post-form/post-form.page';




@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule,
    PostFormPageModule
  ],
  declarations: [HomePage],
  entryComponents: [PostFormPage],
})
export class HomePageModule {}
