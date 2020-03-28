import { Component, OnInit } from '@angular/core';
import {MatInputModule,MatSelectModule} from '@angular/material';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  images: any;
  constructor() { }

  ngOnInit() {

    this.images = [
      {
        imageTitle:'ID Image Front',
        srcAddress:'./assets/sample1.jpg'
      },
      {
        imageTitle:'ID Image Back',
        srcAddress:'./assets/sample2.png'
      },
      {
        imageTitle:'Face Photo',
        srcAddress:'./assets/sample3.jpeg'
      },
      {
        imageTitle:'Random Photo',
        srcAddress:'./assets/sample4.jpeg'
      }
    ]
  }

}
