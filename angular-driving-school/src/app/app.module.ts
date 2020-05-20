import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './home/header/header.component';
import { NewsMainComponent } from './home/news-main/news-main.component';
import { HomeComponent } from './home/home.component';
import { AboutSchoolComponent } from './about-school/about-school.component';
import { PricelistComponent } from './pricelist/pricelist.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    NewsMainComponent,
    HomeComponent,
    AboutSchoolComponent,
    PricelistComponent,
    ContactComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
