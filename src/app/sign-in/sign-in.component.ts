import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { User } from 'src/models/user.model';
import 'bootstrap';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css', '../../styles/header-style.css']
})
export class SignInComponent implements OnInit {

  public userDoesntExist = false;

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  signIn(username: HTMLInputElement, password: HTMLInputElement) {
    const user = username.value;
    const pas = password. value;

    this.service.getUser(user, pas);
    this.userDoesntExist = false;

    username.value = '';
    password.value = '';
  }

  setClass() {
    if (this.service.user === undefined) {
      this.service.user = null;
      this.userDoesntExist = true;
      return ;
    }

    if (this.service.user !== null) {
      return 'not-visible';
    }
  }

  setInfoClass() {
    if (this.service.user === undefined) {
      this.service.user = null;
      this.userDoesntExist = true;
      return ;
    }

    if (this.service.user === null) {
      return 'not-visible';
    }
  }

  signOut(out: boolean): void {
    this.service.user = null;
    this.userDoesntExist = false;
    this.service.setAdminUser(false);
  }
}
