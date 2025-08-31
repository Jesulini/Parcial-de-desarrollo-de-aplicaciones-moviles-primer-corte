import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-header',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Noticias App</ion-title>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
  `
})
export class HeaderComponent {}
