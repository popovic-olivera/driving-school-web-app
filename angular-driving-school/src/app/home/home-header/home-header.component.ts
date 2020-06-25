import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css', '../../../styles/header-style.css']
})
export class HomeHeaderComponent implements OnInit {

  public type = 'Auto škola';
  public name = 'Srećko';
  public subtitle = 'Najpovoljnija auto škola u Pančevu!';

  constructor() { }

  ngOnInit(): void {}

}
