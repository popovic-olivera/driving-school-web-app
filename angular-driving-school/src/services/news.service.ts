import { Injectable } from '@angular/core';
import { News } from 'src/models/news.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  private len = 4;
  private fileName = 'assets/json/news.json';

  constructor(private http: HttpClient) {
  }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.fileName).pipe(
      map(news => news.filter(n => news.indexOf(n) < this.len)));
  }

  loadNews(): Observable<News[]> {
    this.len += 1;

    return this.http.get<News[]>(this.fileName).pipe(
      map(news => news.filter(n => news.indexOf(n) < this.len)));
  }

  setLen(value: number) {
    this.len = value;
  }
}
