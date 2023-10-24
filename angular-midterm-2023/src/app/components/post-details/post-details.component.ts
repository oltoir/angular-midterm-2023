import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Like, Post, Comment} from "./post.model";
import {PostService} from "../../services/post.service";
import {CommentService} from "../../services/comment.service";
import {LikeService} from "../../services/like.service";


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  post: Post = {} as Post;
  comments: Comment[] = [] as Comment[];
  likes: Like[] = [] as Like[];
  newCommentText: string  = '';

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private commentService: CommentService,
    private likeService: LikeService
  ) {
  }

  ngOnInit(): void {
    this.loadPostDetails();
    this.loadComments();
    this.loadLikes();
  }

  loadPostDetails() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const postId = idParam !== null && idParam !== undefined ? +idParam : 0;

    this.postService.getPostById(postId).subscribe((data) => {
      this.post = data;
    });
  }

  loadComments() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const postId = idParam !== null && idParam !== undefined ? +idParam : 0;

    this.commentService.getCommentsByPostId(postId).subscribe((data) => {
      this.comments = data;
    });
  }

  loadLikes() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const postId = idParam !== null && idParam !== undefined ? +idParam : 0;

    this.likeService.getLikesByPostId(postId).subscribe((data) => {
      this.likes = data;
    });
  }

  addComment(text: string) {
    const idParam = this.route.snapshot.paramMap.get('id');
    const postId = idParam !== null && idParam !== undefined ? +idParam : 0;

    const newComment: any = {
      postId: postId,
      userId: 1,
      text: text,
    };

    this.commentService.addComment(newComment).subscribe((result) => {
      this.loadComments();
    });
  }

  likePost() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const postId = idParam !== null && idParam !== undefined ? +idParam : 0;

    const newLike: any = {
      postId: postId,
      userId: 1,
    };

    this.likeService.addLike(newLike).subscribe((result) => {
      this.loadLikes();
    });
  }
}
