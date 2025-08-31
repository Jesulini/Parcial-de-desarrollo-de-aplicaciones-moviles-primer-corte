import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-input',
  template: `
    <ion-item>
      <ion-label position="floating">{{ label }}</ion-label>
      <ion-input [type]="type" [(ngModel)]="value"></ion-input>
    </ion-item>
  `,
})
export class InputComponent {
  @Input() label: string = '';
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() value: any;
}
