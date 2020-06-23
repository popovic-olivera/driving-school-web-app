import { Component, OnInit } from '@angular/core';
import {Image } from 'src/models/image.model';

@Component({
  selector: 'app-gallery-main',
  templateUrl: './gallery-main.component.html',
  styleUrls: ['./gallery-main.component.css', '../../../styles/main-style.css']
})
export class GalleryMainComponent implements OnInit {

  images: Image[] = [];

  constructor() { }

  ngOnInit(): void {
    this.images.push(new Image('../../../assets/cars/chickHicks.jpg', 'Chick Hiks', 'Autići', new Date('2020-05-01')));
    this.images.push(new Image('../../../assets/cars/docHudson.jpg', 'Doc Hudson', 'Autići', new Date('2020-05-10')));
    this.images.push(new Image('../../../assets/cars/lightningMcqueen.jpg', 'Lightning Mcquee', 'Autići', new Date('2020-05-16')));
    this.images.push(new Image('../../../assets/cars/ramone.png', 'Ramone', 'Autići', new Date('2020-06-07')));
    this.images.push(new Image('../../../assets/cars/sallyCarrera.jpg', 'Sally Carrera', 'Autići', new Date('2020-06-15')));
    this.images.push(new Image('../../../assets/cars/mater.jpg', 'Mater', 'Autići', new Date('2020-05-26')));
  }

}
