import {Component, OnInit} from '@angular/core';
import {Post} from "../post-details/post.model";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {

    this.postService.getPostsObservable().subscribe((data) => {
      this.posts = data;
    });

    this.loadPosts();
  }

  loadPosts() {
    this.postService.getAllPosts().subscribe((data) => {
      this.posts = data;
    });
  }
}
