import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css', '../../../styles/main-style.css']
})
export class InfoComponent implements OnInit {

  @Output()
  public out: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public service: UserService) { }

  ngOnInit(): void {
  }

  signOut() {
    this.out.emit(true);
  }
}
