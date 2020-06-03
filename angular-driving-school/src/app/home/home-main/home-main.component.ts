import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from 'src/services/news.service';
import { News } from 'src/models/news.model';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css', '../../../styles/main-style.css']
})
export class HomeMainComponent implements OnInit, OnDestroy {

  news: News[] = [];

  constructor(private service: NewsService) {}

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
}
