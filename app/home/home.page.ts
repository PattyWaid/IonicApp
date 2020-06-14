import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, AfterViewChecked, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy, Input, Output } from '@angular/core';
import { Post } from '../post.model';
import { PostserviceService } from '../postservice.service';
import { ModalController, DomController, AlertController } from '@ionic/angular';

import { PostFormPage } from './post-form/post-form.page';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{

  type: string
  posts: Post[] = [];
  optionsClicked = true;
  selectedPost: Post;
  //subScription: Subscription;
 
  constructor(private postService: PostserviceService, private modalCtrl: ModalController,
              private alertCtrl: AlertController) {}

  ngOnInit() {
    this.type = 'All';
    this.posts = this.postService.getAllPosts();
  
    //console.log("Home:", this.posts);

  }


   onButtonAllClicked() {
    this.posts = this.postService.getAllPosts();
    
    
  }

  async onEditClicked(postid: number) {

   this.selectedPost =  this.posts.find( post => {
     return post.recId === postid
    });

   let modal = await this.modalCtrl.create({
      component: PostFormPage,
      componentProps: {
        selectedPost: this.selectedPost
      }
    });
    modal.present();
    
    console.log("Data:" ,this.selectedPost);

  }

  async onDeleteClicked(postid: number){

    const alert = await this.alertCtrl.create({
      header: 'Delete the Blog',
      message: 'Do you wish to delete the Blog?',
      buttons: [{
        text: 'No',
        role: 'cancel',
        },
        {
        text: 'Yes',
        handler: () => {
          this.postService.deletePost(postid);
        }
        }]
    });
    alert.present();
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
     component: PostFormPage,
   });
   modal.present();
  }

  ngOnDestroy(){
    //this.subScription.unsubscribe();
  }
  
  

}  