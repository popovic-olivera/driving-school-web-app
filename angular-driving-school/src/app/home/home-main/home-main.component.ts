import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from 'src/services/news.service';
import { News } from 'src/models/news.model';
import { SerbianDate } from 'src/pipes/date.pipe';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css', '../../../styles/main-style.css']
})
export class HomeMainComponent implements OnInit, OnDestroy {

  news: News[] = [];
  private newTitle: string = undefined;
  private newSubtitle: string = undefined;
  private newLink: string = undefined;
  private newPath: string = undefined;

  constructor(private service: NewsService, private pipe: SerbianDate) {}

  ngOnInit() {
    this.service.getNews().subscribe(
      news => this.news = news,
      error => console.error(error)
    );
  }

  loadOlderNews(): void {
    this.service.loadNews().subscribe(
      news => this.news = news,
      error => console.error(error)
    );
  }

  ngOnDestroy(): void {
    this.service.setLen(4);
  }

  setNewTitle(title: string): void {
    this.newTitle = title;
    this.addNewImage();
  }

  setNewSubtitle(subtitle: string): void {
    this.newSubtitle = subtitle;
    this.addNewImage();
  }

  setNewLink(link: string): void {
    this.newLink = link;
    this.addNewImage();
  }

  setNewPath(path: string): void {
    this.newPath = path;
    this.addNewImage();
  }

  addNewImage(): void {
    if (this.newPath === undefined || this.newTitle === undefined ||
        this.newSubtitle === undefined || this.newLink === undefined) {
      return;
    }

    this.news.unshift(new News(this.newTitle,
                               this.newSubtitle,
                               this.pipe.transform(new Date()),
                               this.newLink,
                               this.newPath === null ? '' : '../../../assets/' + this.newPath));

    this.newTitle = undefined;
    this.newSubtitle = undefined;
    this.newLink = undefined;
    this.newPath = undefined;
  }
}
