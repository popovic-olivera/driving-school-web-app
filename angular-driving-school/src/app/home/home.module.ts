import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { AddNewsComponent } from './add-news/add-news.component';

@NgModule({
  declarations: [HomePageComponent, HomeMainComponent, HomeHeaderComponent, AddNewsComponent],
  imports: [
    CommonModule
  ]
})

export class HomeModule { }
