import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { HomeComponent } from './home/home.component';
import { AboutSchoolComponent } from './about-school/about-school.component';
import { PricelistComponent } from './pricelist/pricelist.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FooterComponent } from './footer/footer.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { AboutHeaderComponent } from './about-school/about-header/about-header.component';
import { AboutMainComponent } from './about-school/about-main/about-main.component';
import { PricelistHeaderComponent } from './pricelist/pricelist-header/pricelist-header.component';
import { PricelistMainComponent } from './pricelist/pricelist-main/pricelist-main.component';
import { ContactHeaderComponent } from './contact/contact-header/contact-header.component';
import { ContactMainComponent } from './contact/contact-main/contact-main.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeMainComponent,
    HomeComponent,
    AboutSchoolComponent,
    PricelistComponent,
    ContactComponent,
    SignInComponent,
    FooterComponent,
    HomeHeaderComponent,
    AboutHeaderComponent,
    AboutMainComponent,
    PricelistHeaderComponent,
    PricelistMainComponent,
    ContactHeaderComponent,
    ContactMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
