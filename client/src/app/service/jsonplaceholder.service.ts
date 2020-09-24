import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../model/Photo';
import { Comment } from '../model/Comment';
import { Post } from '../model/Post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  constructor(private http: HttpClient) { }

  getPhotos() {
    return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos?_limit=5');
  }

  getComments() {
    return this.http.get<Comment[]>('http://jsonplaceholder.typicode.com/comments?_limit=5');
  }

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=5');
  }

}
