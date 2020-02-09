import { Component } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './post-create.component.html'
})

export class postCreateComponent {
  createPost(){
    alert('Post Added!');
  }
}
