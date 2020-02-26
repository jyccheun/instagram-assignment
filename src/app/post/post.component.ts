import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/posts';
import { POSTS } from '../mockData/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts : Post[] = POSTS;
  notLikedSrc : string = 'https://img.icons8.com/ios/50/000000/like.png';
  likedSrc : string = 'https://img.icons8.com/ios-filled/50/000000/like.png';

  constructor() { }

  ngOnInit() {
  }

  toggleLike(event: Event) : void {
    let imgSource : string = (event.target as HTMLImageElement).src;
    console.log(imgSource);

    if (imgSource == this.notLikedSrc) {
      (event.target as HTMLImageElement).src = this.likedSrc;
    }
    else {
      (event.target as HTMLImageElement).src = this.notLikedSrc;
    }
  }
}
