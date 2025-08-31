import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-button',
  template: `
    <ion-button [type]="type" [disabled]="disabled">{{ label }}</ion-button>
  `,
})
export class ButtonComponent {
  @Input() label: string = 'Botón';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled: boolean = false;
}
