import { Component, OnInit } from '@angular/core';
import { ContactInfo } from 'src/models/contact-info.model';

@Component({
  selector: 'app-contact-main',
  templateUrl: './contact-main.component.html',
  styleUrls: ['./contact-main.component.css', '../../../styles/main-style.css']
})
export class ContactMainComponent implements OnInit {

  information: ContactInfo[] = [];

  constructor() {
    this.information.push(new ContactInfo('Lokacija', 'Zmaj Jove Jovanovića 20, Pančevo'));
    this.information.push(new ContactInfo('Kontakt telefoni', '013 332776 i 069 661 650'));
    this.information.push(new ContactInfo('Radno vreme', 'Radnim danima od 8:30 do 15:30, a subotom od 8:00 do 13:00.'));
  }

  ngOnInit(): void {
  }

}
