// post-create.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

export interface Post {
  code: string;
  value: string;
}

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

  post: Post;

  @Output() postCreated = new EventEmitter<Post>();

  constructor() {
    this.post = {} as Post;
  }

  // tslint:disable-next-line: typedef
  onAddPost(){
    const post = {
      code: this.post.code,
      value: this.post.value
    }
    this.postCreated.emit(post);
  }

}
