import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
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


  id: number;
  browsed: string;
  title: string


  constructor(private route: Router, private activateRoute: ActivatedRoute, private postService: PostserviceService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(
        params => {
        if(params.has('id')){

        }
        this.id = +params.get('id');
        this.title = this.postService.getPostById(this.id).category;
      }
    );
    this.browsed = 'content'
  }





  onContentClicked() {
    this.browsed = 'content';
    
    this.route.navigate(['/posts/'+ this.id+ '/content']);
    
  }

  onGalleryClicked() {
    this.browsed = 'gallery';

    this.route.navigate(['./posts/'+ this.id+ '/gallery']);
  }

  onCommentsClicked() {
    this.browsed = 'comments';

    this.route.navigate(['./posts/' + this.id+ '/comments']);
  }

  onAboutClicked() {
    this.browsed = 'about';

    this.route.navigate(['./posts/' + this.id+ '/about']);
  }

  



}
