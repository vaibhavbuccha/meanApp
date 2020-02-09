import { Component } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './post-create.component.html'
})

export class postCreateComponent {
  newPost = '';
  createPost(){
    this.newPost = 'The new post added by user!'
  }
}
