import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  @ViewChild('navigation', {static: false})
  public elementView: ElementRef;

  private previousTop = 0;
  private fixed = false;
  private visible = false;

  constructor(public service: UserService) { }

  ngOnInit(): void {}

  navHeight(): number {
    return this.elementView.nativeElement.offsetHeight;
  }

  @HostListener('window:scroll', ['$event'])
  doSomething(event: any) {
    const currentTop: number = window.pageYOffset;

    // Check if user is scrolling up
    if (currentTop < this.previousTop) {
      if (currentTop > 0 && this.fixed) {
          this.visible = true;
      }
      else {
          this.visible = false;
          this.fixed = false;
      }
    }
    // if scrolling down
    else if (currentTop > this.previousTop) {
      this.visible = false;

      if (currentTop > this.navHeight() && !this.fixed) {
        this.fixed = true;
      }
    }

    this.previousTop = currentTop;
  }

  public getClass() {
    return {
      'is-fixed': this.fixed,
      'is-visible': this.visible
    };
  }

}
