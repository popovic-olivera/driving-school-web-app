import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from '../../pipes/pipe.module';

import { GalleryComponent } from './gallery/gallery.component';
import { GalleryHeaderComponent } from './gallery-header/gallery-header.component';
import { GalleryMainComponent } from './gallery-main/gallery-main.component';
import { AddImageComponent } from './add-image/add-image.component';

@NgModule({
  declarations: [
    GalleryComponent,
    GalleryHeaderComponent,
    GalleryMainComponent,
    AddImageComponent,
  ],
  imports: [CommonModule, PipeModule],
})

export class GalleryModule { }
