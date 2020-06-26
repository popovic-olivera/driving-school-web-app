import { Injectable } from '@angular/core';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})

export class ImageService {

  public images: Image[] = [];

  constructor() {}

  createImages(): void {
    if (this.images.length !== 0) {
      return;
    }

    this.images.push(new Image('assets/gallery/chickHicks.jpg', 'Chick Hiks', 'Autići', new Date('2020-05-01')));
    this.images.push(new Image('assets/gallery/docHudson.jpg', 'Doc Hudson', 'Autići', new Date('2020-05-10')));
    this.images.push(new Image('assets/gallery/lightningMcqueen.jpg', 'Lightning Mcquee', 'Autići', new Date('2020-05-16')));
    this.images.push(new Image('assets/gallery/ramone.png', 'Ramone', 'Autići', new Date('2020-06-07')));
    this.images.push(new Image('assets/gallery/sallyCarrera.jpg', 'Sally Carrera', 'Autići', new Date('2020-06-15')));
    this.images.push(new Image('assets/gallery/mater.jpg', 'Mater', 'Autići', new Date('2020-05-26')));
  }
}
