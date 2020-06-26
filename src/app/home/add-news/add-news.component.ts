import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css', '../../../styles/main-style.css']
})

export class AddNewsComponent implements OnInit {

  @ViewChild('text', {static: false})
  private text: ElementRef;

  @Output()
  public emitTitle: EventEmitter<string> = new EventEmitter<string>();
  public titleEnabled = false;

  @Output()
  public emitSubtitle: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public emitLink: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public emitPath: EventEmitter<string> = new EventEmitter<string>();
  public tmpPath: string = null;

  constructor() { }

  ngOnInit(): void {}

  onFileSelected(event: Event) {
    this.tmpPath = (event.target as HTMLInputElement).files[0].name;
  }

  onTitleChange(event: Event) {
    // Title needs to have at least one character, which is not space
    if ((event.target as HTMLInputElement).value !== ' ') {
      this.titleEnabled = true;
    }
  }

  addNews(title: HTMLInputElement, subtitle: HTMLInputElement, link: HTMLInputElement, path: HTMLInputElement) {
    const ttileValue: string = title.value;
    const subtitleValue: string = subtitle.value;
    const linkValue: string = link.value;

    this.emitTitle.emit(ttileValue);
    this.emitSubtitle.emit(subtitleValue);
    this.emitLink.emit(linkValue);
    this.emitPath.emit(this.tmpPath);

    // Reset all values for next use
    title.value = '';
    subtitle.value = '';
    link.value = '';
    path.files = null;
    this.tmpPath = null;
  }
}
