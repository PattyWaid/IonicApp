import { Component, OnInit } from '@angular/core';
import { Post } from '../../post.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PostserviceService } from '../postservice.service';


@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.page.html',
  styleUrls: ['./page-detail.page.scss'],
})
export class PageDetailPage implements OnInit {

  post: Post;
  clicked: string;


  constructor(private route: Router, private activateRoute: ActivatedRoute, private postService: PostserviceService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramsMap => {
      if(!paramsMap.has('id')) {
        return;
      }
      const id = paramsMap.get('id');
      this.post = this.postService.getPostById(id);
    });
  }




  onContentClicked() {
    this.clicked = 'content';
    this.route.navigate(['./posts/'+ this.post.recId+ '/content']);
  }

  onGalleryClicked() {
    this.clicked = 'gallery';
    this.route.navigate(['./posts/'+ this.post.recId+ '/gallery']);
  }

  onCommentsClicked() {
    this.route.navigate(['./posts/' + this.post.recId+ '/comments']);
  }

  onAboutClicked() {
    this.route.navigate(['./posts/' + this.post.recId+ '/about']);
  }

  



}
