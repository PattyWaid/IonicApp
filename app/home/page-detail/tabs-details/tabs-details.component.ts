import { Component, OnInit, EventEmitter, Input } from '@angular/core';

import { Post } from '../../../post.model';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-tabs-details',
  templateUrl: './tabs-details.component.html',
  styleUrls: ['./tabs-details.component.scss'],
})
export class TabsDetailsComponent implements OnInit{

  @Input() post: Post;
  browsed: string;
   

  constructor(private activeRoute: Router) { }

  ngOnInit() {
    if(this.activeRoute.url.split('/')[3] === 'content'){
      this.browsed = 'content';
    }

    if(this.activeRoute.url.split('/')[3] === 'gallery'){
      console.log("Inside Ga;;ery");
      this.browsed = 'gallery';
    }

    if(this.activeRoute.url.split('/')[3] === 'comments'){
      this.browsed = 'comments';
    }

    if(this.activeRoute.url.split('/')[3] === 'about'){

      this.browsed = 'about';
    }
     
  
    }
  
  }
