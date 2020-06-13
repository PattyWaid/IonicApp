import { Comments } from './comments.model';

export interface Post {


        category: string
        comments: Comments[]
        description: string
        imagePath: string
        name: string
        recId: number
        user: string
      
}