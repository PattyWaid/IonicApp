import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Post } from '../post.model';
import { PostserviceService } from './postservice.service';
import { take, map } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { PostFormComponent } from './post-form/post-form.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  posts: Post[] = [];
 
  constructor(private postService: PostserviceService, private modalCtrl: ModalController) {}

  ngOnInit() {
    this.posts = this.postService.getAllPosts();
  }


   onButtonAllClicked() {
    this.posts = this.postService.getAllPosts()
  }

  onButtonListedClicked() { 
   this.posts = this.posts.filter(post =>{
          return +post.recId %2 === 0
    });

  }

  onButtonFeaturedClicked() {
    this.posts = this.posts.filter(post =>{
          return +post.recId %2 !== 0
    });
  }


  async onPresentModal() {
   const modal = await this.modalCtrl.create({
    component: PostFormComponent
  });
  modal.present()
  }
  
  

}
