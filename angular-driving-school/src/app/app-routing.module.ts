import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutSchoolComponent } from './about-school/about-school.component';
import { PricelistComponent } from './pricelist/pricelist.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AddNewsComponent } from './home/home-main/add-news/add-news.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'aboutSchool', component: AboutSchoolComponent},
  { path: 'pricelist', component: PricelistComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'signIn', component: SignInComponent},
  { path: 'gallery', component: GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
