import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, AfterViewChecked, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy, Input, Output } from '@angular/core';
import { Post } from '../post.model';
import { PostserviceService } from '../postservice.service';
import { ModalController, DomController } from '@ionic/angular';

import { PostFormPage } from './post-form/post-form.page';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{

  type: string
  posts: Post[] = [];
  //subScription: Subscription;
 
  constructor(private postService: PostserviceService, private modalCtrl: ModalController) {}

  ngOnInit() {
    this.type = 'All';
    this.posts = this.postService.getAllPosts();
  
    //console.log("Home:", this.posts);

  }


   onButtonAllClicked() {
    this.posts = this.postService.getAllPosts();
    
    
  }

  onButtonListedClicked() { 
   this.posts = this.posts.filter(post =>{
          return +post.recId %2 === 0

    });

  }

  onButtonFeaturedClicked() {
    this.posts = this.posts.filter(post =>{
         // return +post.recId %2 !== 0
    });
  }


 async onPresentModal() {
   
   let modal = await this.modalCtrl.create({
     component: PostFormPage
   });
   modal.present();
  }

  ngOnDestroy(){
    //this.subScription.unsubscribe();
  }
  
  

}  