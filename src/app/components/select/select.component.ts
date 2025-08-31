import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-select',
  template: `
    <ion-item>
      <ion-label>{{ label }}</ion-label>
      <ion-select [(ngModel)]="selected" [multiple]="multiple">
        <ion-select-option *ngFor="let option of options" [value]="option">{{option}}</ion-select-option>
      </ion-select>
    </ion-item>
  `,
})
export class SelectComponent {
  @Input() label: string = '';
  @Input() options: string[] = [];
  @Input() selected: any;
  @Input() multiple: boolean = false;
}
