import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Price } from 'src/models/price.model';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PriceService {
  private fileName = 'assets/json/prices.json';

  constructor(private http: HttpClient) { }

  getPrices(): Observable<Price[]> {
    return this.http.get<Price[]>(this.fileName);
  }

  filterPrices(str: string): Observable<Price[]> {
    return this.http.get<Price[]>(this.fileName).pipe(
      map(prices => prices.filter(price => price.category.toLowerCase().includes(str.toLowerCase()))));
  }
}
