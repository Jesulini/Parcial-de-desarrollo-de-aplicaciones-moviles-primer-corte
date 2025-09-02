import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Browser } from '@capacitor/browser';

@Component({
  standalone: false,
  selector: 'app-modal',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ news?.title }}</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="close()">Cerrar</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <img *ngIf="news?.image" [src]="news.image" />
      <p>{{ news?.description }}</p>
      <ion-button expand="block" (click)="openInBrowser(news?.url)">
        Leer más
      </ion-button>
    </ion-content>
  `
})
export class ModalComponent {
  @Input() news: any;

  constructor(private modalCtrl: ModalController) {}

  close() {
    this.modalCtrl.dismiss();
  }

  async openInBrowser(url: string) {
    if (url) {
      await Browser.open({ url });
    }
  }
}
