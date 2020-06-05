import { Component, OnInit,  Input } from '@angular/core';

import { Post } from '../../../post.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PostserviceService } from '../../postservice.service';


@Component({
  selector: 'app-tabs-details',
  templateUrl: './tabs-details.component.html',
  styleUrls: ['./tabs-details.component.scss'],
})
export class TabsDetailsComponent implements OnInit{

  post: Post;
  @Input() clicked: string;
 
   

  constructor(private activeRoute: ActivatedRoute, private postService: PostserviceService) { }

  ngOnInit() {

    this.activeRoute.paramMap.subscribe(paramsMap => {

      if(paramsMap.has('id') && paramsMap.get('id') === 'undefined') {
      }
      const id = paramsMap.get('id');
      this.post = this.postService.getPostById(+id);
    });

    
    }

  

  
  
  
  }
