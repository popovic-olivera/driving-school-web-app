import { Injectable } from '@angular/core';
import { News } from 'src/models/news.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  private len = 4;

  constructor(private http: HttpClient) {
  }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>('assets/json/news.json').pipe(
      map(news => news.filter(n => news.indexOf(n) < this.len)));
  }

  loadNews(): Observable<News[]> {
    this.len += 1;
    
    return this.http.get<News[]>('assets/json/news.json').pipe(
      map(news => news.filter(n => news.indexOf(n) < this.len)));
  }

  setLen(value: number) {
    this.len = value;
  }
}
