import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from 'src/services/news.service';
import { News } from 'src/models/news.model';
import { SerbianDate } from 'src/pipes/date.pipe';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css', '../../../styles/main-style.css']
})

export class HomeMainComponent implements OnInit, OnDestroy {

  private newTitle: string = undefined;
  private newSubtitle: string = undefined;
  private newLink: string = undefined;
  private newPath: string = undefined;

  constructor(public service: NewsService, private service2: UserService, private pipe: SerbianDate) {}

  ngOnInit() {
    this.service.getNews();
  }

  loadOlderNews(): void {
    this.service.loadNews();
  }

  ngOnDestroy(): void {
    this.service.setLen(4);
  }

  setNewTitle(title: string): void {
    this.newTitle = title;
    this.addNews();
  }

  setNewSubtitle(subtitle: string): void {
    this.newSubtitle = subtitle;
    this.addNews();
  }

  setNewLink(link: string): void {
    this.newLink = link;
    this.addNews();
  }

  setNewPath(path: string): void {
    this.newPath = path;
    this.addNews();
  }

  addNews(): void {
    if (this.newPath === undefined || this.newTitle === undefined ||
        this.newSubtitle === undefined || this.newLink === undefined) {
      return;
    }

    this.service.news.unshift(new News(this.newTitle,
                                       this.newSubtitle,
                                       this.pipe.transform(new Date()),
                                       this.newLink,
                                       this.newPath === null ? '' : 'assets/news/' + this.newPath));

    this.newTitle = undefined;
    this.newSubtitle = undefined;
    this.newLink = undefined;
    this.newPath = undefined;
  }

  setClass() {
    // Set not visible if non admin user signed in
    if (!this.service2.getAdminUser()) {
      return 'non-visible';
    }
  }
}
