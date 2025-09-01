import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() news: any;
  @Output() clickCard = new EventEmitter<any>();

  onClick() {
    this.clickCard.emit(this.news);
  }
}
