import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-card',
  template: `
    <ion-card (click)="clickCard.emit(news)">
      <img [src]="news.image" *ngIf="news.image"/>
      <ion-card-header>
        <ion-card-title>{{ news.title }}</ion-card-title>
      </ion-card-header>
      <ion-card-content>{{ news.description }}</ion-card-content>
    </ion-card>
  `,
})
export class CardComponent {
  @Input() news: any;
  @Output() clickCard = new EventEmitter<any>();
}
