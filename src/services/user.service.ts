import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private adminUser = false;
  private fileName = 'assets/json/users.json';
  public user: User = null;

  constructor(private http: HttpClient) { }

  getAdminUser(): boolean {
    return this.adminUser;
  }

  setAdminUser(value: boolean): void {
    this.adminUser = value;
  }

  getUser(username: string, password: string): void {

    this.http.get<User[]>(this.fileName)
             .pipe(map(users => users.filter(u => u.username === username && u.password === password)[0]))
             .subscribe(
                u => this.user = u,
                error => console.error(error)
             );

    if (username === 'admin' && password === '123456') {
      this.adminUser = true;
    }
  }
}
