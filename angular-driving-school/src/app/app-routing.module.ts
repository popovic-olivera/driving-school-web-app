import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutSchoolComponent } from './about/about-school/about-school.component';
import { PricelistComponent } from './pricelist/pricelist.component';
import { ContactComponent } from './contact/contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { GalleryComponent } from './gallery/gallery/gallery.component';
import { HomePageComponent } from './home/home-page/home-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent},
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
