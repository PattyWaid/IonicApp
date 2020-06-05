import { Injectable } from '@angular/core';
import { Post } from '../post.model';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})

export class PostserviceService {


  post: Post[] = [];

  constructor(public http: HttpClient) { }


  getAllPosts() {
      this.http.get<Post>('https://ng-project-one-27a56.firebaseio.com/recipes.json').subscribe(res =>{
        for(let pos in res) {
          this.post.push({
            category:res[pos].category,
            comments:res[pos].comments,
            imagePath:res[pos].imagePath,
            description:res[pos].description,
            userId:res[pos].userId,
            recId:+res[pos].recId,
            name:res[pos].name})
        }
      }  
      );
      return [...this.post];  
  }

  getPostById(postid: number) {
   return {
      ...this.post.find(post => {
      return post.recId === postid;
    })};
  }
}
