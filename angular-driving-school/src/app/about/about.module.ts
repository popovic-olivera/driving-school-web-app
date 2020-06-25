import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutSchoolComponent } from './about-school/about-school.component';
import { AboutHeaderComponent } from './about-header/about-header.component';
import { AboutMainComponent } from './about-main/about-main.component';

@NgModule({
  declarations: [AboutSchoolComponent, AboutHeaderComponent, AboutMainComponent],
  imports: [
    CommonModule
  ]
})

export class AboutModule { }
