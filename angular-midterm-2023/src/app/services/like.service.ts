import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Like} from "../components/post-details/post.model";

@Injectable({
  providedIn: 'root',
})
export class LikeService {
  private apiUrl = 'http://localhost:3000/likes'; // JSON-Server API URL for likes

  constructor(private http: HttpClient) {}

  getLikesByPostId(postId: number): Observable<Like[]> {
    return this.http.get<Like[]>(`${this.apiUrl}?postId=${postId}`);
  }

  addLike(like: Like): Observable<Like> {
    return this.http.post<Like>(this.apiUrl, like);
  }
}
