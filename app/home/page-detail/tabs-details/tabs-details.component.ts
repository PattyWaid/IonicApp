import { Component, OnInit,  Input, ViewChild, ElementRef, ContentChild } from '@angular/core';

import { Post } from '../../../post.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PostserviceService } from 'src/app/postservice.service';



@Component({
  selector: 'app-tabs-details',
  templateUrl: './tabs-details.component.html',
  styleUrls: ['./tabs-details.component.scss'],
})
export class TabsDetailsComponent implements OnInit{

  post: Post;
  @Input() clicked: string;
  replyClciked: boolean;
  id: number
 
   

  constructor(private activeRoute: ActivatedRoute, private postService: PostserviceService) { }

  ngOnInit() {

    this.activeRoute.paramMap.subscribe(paramsMap => {

      if(paramsMap.has('id') && paramsMap.get('id') === 'undefined') {
      }
      const id = paramsMap.get('id');
      this.postService.getPostById(+id).subscribe(res =>{
          this.post = res;
    });
    
    });
    
    }

    onCommentAdded(content: HTMLInputElement) {
      const id = this.post.recId
      const comment  = content.value;
      //const user =  this.post.user
      this.postService.addComments({commentText: comment, comments: id, commentUser: 'Dummy'})
      this.ngOnInit();
    }

    onReplyClicked(commentId: number) {
      this.id = commentId
      this.replyClciked = true;
    }


    onReplyAdded(replycontent: HTMLInputElement){
        const replyText = replycontent.value
        const replyUser = this.post.user
        const commentReply = this.id
        this.postService.addReply({replyText: replyText, replyUser: replyUser, commentReply: commentReply })
        this.ngOnInit();
        this.replyClciked = false;
    }

  
  }