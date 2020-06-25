import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css', '../../../styles/main-style.css']
})

export class AddImageComponent implements OnInit {

  @Output()
  public emitPath: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public emitTitle: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public emitSubtitle: EventEmitter<string> = new EventEmitter<string>();

  public tmpPath: string = null;

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event: Event) {
    this.tmpPath = (event.target as HTMLInputElement).files[0].name;
  }

  addImage(path: HTMLInputElement, title: HTMLInputElement, subtitle: HTMLInputElement) {
    const t: string = title.value;
    const s: string = subtitle.value;

    this.emitPath.emit(this.tmpPath);
    this.emitTitle.emit(t);
    this.emitSubtitle.emit(s);

    title.value = '';
    subtitle.value = '';
    path.files = null;
    this.tmpPath = null;
  }
}
