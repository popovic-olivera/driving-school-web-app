import { Component, OnInit } from '@angular/core';
import { Image } from 'src/models/image.model';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-gallery-main',
  templateUrl: './gallery-main.component.html',
  styleUrls: ['./gallery-main.component.css', '../../../styles/main-style.css']
})
export class GalleryMainComponent implements OnInit {

  public images: Image[] = [];
  private newPath: string = undefined;
  private newTitle: string = undefined;
  private newSubtitle: string = undefined;

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.images.push(new Image('../../../assets/gallery/chickHicks.jpg', 'Chick Hiks', 'Autići', new Date('2020-05-01')));
    this.images.push(new Image('../../../assets/gallery/docHudson.jpg', 'Doc Hudson', 'Autići', new Date('2020-05-10')));
    this.images.push(new Image('../../../assets/gallery/lightningMcqueen.jpg', 'Lightning Mcquee', 'Autići', new Date('2020-05-16')));
    this.images.push(new Image('../../../assets/gallery/ramone.png', 'Ramone', 'Autići', new Date('2020-06-07')));
    this.images.push(new Image('../../../assets/gallery/sallyCarrera.jpg', 'Sally Carrera', 'Autići', new Date('2020-06-15')));
    this.images.push(new Image('../../../assets/gallery/mater.jpg', 'Mater', 'Autići', new Date('2020-05-26')));
  }

  setNewPath(path: string): void {
    this.newPath = path;
    this.addNewImage();
  }

  setNewTitle(title: string): void {
    this.newTitle = title;
    this.addNewImage();
  }

  setNewSubtitle(subtitle: string): void {
    this.newSubtitle = subtitle;
    this.addNewImage();
  }

  addNewImage(): void {
    if (this.newPath === undefined || this.newTitle === undefined || this.newSubtitle === undefined) {
      return;
    }

    this.images.unshift(new Image('../../../assets/gallery/' + this.newPath, this.newTitle, this.newSubtitle, new Date()));

    this.newPath = undefined;
    this.newTitle = undefined;
    this.newSubtitle = undefined;
  }

  setClass() {
    if (!this.service.getAdminUser()) {
      return 'non-visible';
    }
  }
}
