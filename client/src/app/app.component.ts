import { Component } from '@angular/core';
import { JsonplaceholderService } from './service/jsonplaceholder.service';
import { Photo } from './model/Photo';
import { Comment } from './model/Comment';
import { Post } from './model/Post';
import { User } from './model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';


  photos: Photo[] = [];
  comments: Comment[] = [];
  posts: Post[] = [];
  users: User[] = [];


  constructor(public service: JsonplaceholderService) { }

  ngOnInit() {
    // this.service.getPhotos()
    //   .subscribe(
    //     photos => {
    //       console.log(photos);
    //       this.photos = photos;
    //     } 
    //   )

      //  this.service.getComments()
      //  .subscribe(
      //   comments => {
      //      console.log(comments);
      //     this.comments = comments;
      //    } 
      //  )

      // this.service.getPosts()
      // .subscribe(
      //   posts => {
      //     console.log(posts);
      //     this.posts = posts;
      //   } 
      // )

      this.service.getUsers()
       .subscribe(
          users => {
            console.log(users);
            this.users = users;
          } 
        ) 
  }

  something() { alert('Works!'); }

}
