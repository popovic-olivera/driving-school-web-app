import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css', '../../../../styles/main-style.css']
})

export class AddNewsComponent implements OnInit {

  @ViewChild('text', {static: false})
  private text: ElementRef;

  @Output()
  public emitTitle: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public emitSubtitle: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public emitLink: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public emitPath: EventEmitter<string> = new EventEmitter<string>();

  public tmpPath: string = null;

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event: Event) {
    this.tmpPath = (event.target as HTMLInputElement).files[0].name;
  }

  addNews(title: HTMLInputElement, subtitle: HTMLInputElement, link: HTMLInputElement, path: HTMLInputElement) {
    const t: string = title.value;
    const s: string = subtitle.value;
    const l: string = link.value;

    this.emitTitle.emit(t);
    this.emitSubtitle.emit(s);
    this.emitLink.emit(l);
    this.emitPath.emit(this.tmpPath);

    title.value = '';
    subtitle.value = '';
    link.value = '';
    path.files = null;
    this.tmpPath = null;
  }
}
