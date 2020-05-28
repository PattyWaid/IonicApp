import { Injectable } from '@angular/core';
import { Post } from '../post.model';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})

export class PostserviceService {

  /* 
  id: '1',
    name: 'Article 1',
    Description: "This is my first Post",
    image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-delicious-dinner-461198.jpg&fm=jpg'
  },
  {
    id: '2',
    name: 'Article 2',
    Description: "This is my second Post",
    image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-delicious-dinner-461198.jpg&fm=jpg'
  },
  {
    id: '3',
    name: 'Article 3',
    Description: "This is my second Post",
    image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-delicious-dinner-461198.jpg&fm=jpg'
  },
  {
    id: '4',
    name: 'Article 4',
    Description: "This is my second Post",
    image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-delicious-dinner-461198.jpg&fm=jpg'
  },
  {
    id: '5',
    name: 'Article 5',
    Description: "This is my second Post",
    image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-delicious-dinner-461198.jpg&fm=jpg'
  },
  {
    id: '6',
    name: 'Article 6',
    Description: "This is my second Post",
    image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-delicious-dinner-461198.jpg&fm=jpg'
  },
  {
    id: '7',
    name: 'Article 7',
    Description: "This is my second Post",
    image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-delicious-dinner-461198.jpg&fm=jpg'
  },
  {
    id: '8',
    name: 'Article 8',
    Description: "This is my second Post",
    image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-delicious-dinner-461198.jpg&fm=jpg'
  },
  {
    id: '9',
    name: 'Article 9',
    Description: "This is my second Post",
    image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-delicious-dinner-461198.jpg&fm=jpg'
  },
  {
    id: '10',
    name: 'Article 10',
    Description: "This is my second Post",
    image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-delicious-dinner-461198.jpg&fm=jpg'
  },
  {
    id: '11',
    name: 'Article 11',
    Description: "This is my second Post",
    image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-delicious-dinner-461198.jpg&fm=jpg'
  },
  {
    id: '12',
    name: 'Article 12',
    Description: "This is my second Post",
    image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-delicious-dinner-461198.jpg&fm=jpg'
  },
  {
    id: '13',
    name: 'Article 13',
    Description: "This is my second Post",
    image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-delicious-dinner-461198.jpg&fm=jpg'
  }
  
  */

  

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

  getPostById(postid: string) {
   return {
      ...this.post.find(post => {
      return post.recId === +postid;
    })};
  }
}
