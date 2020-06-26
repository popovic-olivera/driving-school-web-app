import { Component, OnInit } from '@angular/core';
import { Price } from 'src/models/price.model';
import { PriceService } from 'src/services/price.service';

@Component({
  selector: 'app-pricelist-main',
  templateUrl: './pricelist-main.component.html',
  styleUrls: ['./pricelist-main.component.css', '../../../styles/main-style.css']
})
export class PricelistMainComponent implements OnInit {

  prices: Price[] = [];

  constructor(private service: PriceService) { }

  ngOnInit(){
    this.service.getPrices().subscribe(
      prices => this.prices = prices,
      error => console.error(error)
    );
  }

  onInputChange(event: Event): void {
    this.service.filterPrices((event.target as HTMLInputElement).value).subscribe(
      prices => this.prices = prices,
      error => console.error(error)
    );
  }
}
