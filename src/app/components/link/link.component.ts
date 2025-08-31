import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-link',
  template: `<ion-button fill="clear" (click)="navigate()">{{ label }}</ion-button>`
})
export class LinkComponent {
  @Input() label: string = 'Ir';
  @Input() route: string = '/';

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate([this.route]);
  }
}
