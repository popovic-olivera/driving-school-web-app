import { Component, OnInit } from '@angular/core';
import { Image } from '../../../models/image.model';
import { UserService } from '../../../services/user.service';
import { ImageService } from '../../../services/image.service';

@Component({
  selector: 'app-gallery-main',
  templateUrl: './gallery-main.component.html',
  styleUrls: ['./gallery-main.component.css', '../../../styles/main-style.css']
})
export class GalleryMainComponent implements OnInit {

  private newPath: string = undefined;
  private newTitle: string = undefined;
  private newSubtitle: string = undefined;

  constructor(public imgService: ImageService, private service: UserService) { }

  ngOnInit(): void {
    this.imgService.createImages();
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

    this.imgService.images.unshift(new Image('../../../assets/gallery/' + this.newPath, this.newTitle, this.newSubtitle, new Date()));

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
