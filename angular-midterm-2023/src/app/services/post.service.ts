import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {Post} from "../components/post-details/post.model";
@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://localhost:3000/posts';
  private postsSubject = new BehaviorSubject<Post[]>([]); // BehaviorSubject to emit updates

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
  getPostsObservable(): Observable<Post[]> {
    return this.postsSubject.asObservable();
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post)

  }
}
