import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comments } from './comments.model';
import { CommentReply } from './comment-reply.model';


@Injectable({
  providedIn: 'root'
})

export class PostserviceService {


  post: Post[] = [];

  constructor(public http: HttpClient) { }

  getAllPosts() {
      this.http.get<Post>('http://localhost:8000/posts/').subscribe(res =>{
        for(let pos in res) {
          this.post.push({
            category:res[pos].category,
            comments:res[pos].comments,
            imagePath:res[pos].imagePath,
            description:res[pos].description,
            user:res[pos].user,
            recId:+res[pos].recId,
            name:res[pos].name})
        }
      }
      );
      console.log(this.post)
      return this.post;  
  }

  getPostById(postid: number) {
    return this.http.get<Post>(`http://localhost:8000/posts/${postid}/`)
  }
 


  createPost(post: Post){
    this.http.post('http://localhost:8000/create/', {
    post
    }).subscribe(response => {
      console.log(response);
    })
  }

  addComments(comments: Comments){
    this.http.post('http://localhost:8000/add/comments/', {
    comments
    }).subscribe(response => {
      console.log(response);
    })
  }

  addReply(reply: CommentReply){
    this.http.post('http://localhost:8000/add/reply/', {
    reply
    }).subscribe(response => {
      console.log(response);
    })
  }

}
 
