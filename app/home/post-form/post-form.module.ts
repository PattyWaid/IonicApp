import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostFormPageRoutingModule } from './post-form-routing.module';

import { PostFormPage } from './post-form.page';
import { QuillModule } from 'ngx-quill';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostFormPageRoutingModule,
    ReactiveFormsModule,
    QuillModule.forRoot()
  ],
  declarations: [PostFormPage]
})
export class PostFormPageModule {}
