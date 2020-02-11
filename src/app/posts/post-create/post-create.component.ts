import { Component } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './post-create.component.html'
})

export class postCreateComponent {
  newPost = 'NO CONTENT';
  enteredValue = '';

  // createPost(postInput : HTMLTextAreaElement){
    createPost(){
    // console.log(postInput);
    // console.dir(postInput);
    this.newPost = this.enteredValue;
  }
}
