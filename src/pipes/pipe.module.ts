import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerbianDate } from './date.pipe';

@NgModule({
  declarations: [SerbianDate],
  imports: [CommonModule],
  exports: [SerbianDate]
})

export class PipeModule {}
