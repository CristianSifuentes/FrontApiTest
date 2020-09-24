import { Component } from '@angular/core';
import { JsonplaceholderService } from './service/jsonplaceholder.service';
import { Photo } from './model/Photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';


  photos: Photo[] = [];

  constructor(public service: JsonplaceholderService) { }

  ngOnInit() {
    this.service.getPhotos()
      .subscribe(
        photos => {
          console.log(photos);
          this.photos = photos;
        } 
      )
  }

  something() { alert('Works!'); }

}
