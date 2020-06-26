import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { GalleryModule } from './gallery/gallery.module';
import { PipeModule } from '../pipes/pipe.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PricelistComponent } from './pricelist/pricelist.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FooterComponent } from './footer/footer.component';
import { PricelistHeaderComponent } from './pricelist/pricelist-header/pricelist-header.component';
import { PricelistMainComponent } from './pricelist/pricelist-main/pricelist-main.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoComponent } from './sign-in/info/info.component';
import { SerbianDate } from 'src/pipes/date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PricelistComponent,
    SignInComponent,
    FooterComponent,
    PricelistHeaderComponent,
    PricelistMainComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HomeModule,
    AboutModule,
    ContactModule,
    GalleryModule,
    PipeModule
  ],
  bootstrap: [AppComponent],
  providers: [SerbianDate]
})

export class AppModule { }
