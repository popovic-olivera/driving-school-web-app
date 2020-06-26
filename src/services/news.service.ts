import { Injectable } from '@angular/core';
import { News } from 'src/models/news.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  private len = 4;
  private fileName = 'assets/json/news.json';
  public news: News[] = [];

  constructor(private http: HttpClient) {
  }

  getNews(): void {
    // On component destroy keep news
    if (this.news.length !== 0) {
      return;
    }

    this.http.get<News[]>(this.fileName)
      .pipe(map(news => news.filter(n => news.indexOf(n) < this.len)))
      .subscribe(
        news => this.news = news,
        error => console.error(error)
      );
  }

  loadNews(): void {
    this.len += 1;

    this.http.get<News[]>(this.fileName)
      .pipe(map(news => news.filter(n => news.indexOf(n) < this.len)))
      .subscribe(
        news => this.news = news,
        error => console.error(error)
      );
  }

  setLen(value: number) {
    this.len = value;
  }
}
