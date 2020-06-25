import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ContactHeaderComponent } from './contact-header/contact-header.component';
import { ContactMainComponent } from './contact-main/contact-main.component';

@NgModule({
  declarations: [ContactComponent, ContactHeaderComponent, ContactMainComponent],
  imports: [
    CommonModule
  ]
})

export class ContactModule { }
