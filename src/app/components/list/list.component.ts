import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-list',
  template: `
    <ion-list>
      <ion-item button (click)="navigate('/home')">Inicio</ion-item>
      <ion-item button (click)="navigate('/profile')">Perfil</ion-item>
      <ion-item button (click)="navigate('/settings')">Configuración</ion-item>
    </ion-list>
  `
})
export class ListComponent {
  constructor(private router: Router) {}
  navigate(route: string) {
    this.router.navigate([route]);
  }
}
