import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {

  notificationsEnabled: boolean = true;
  selectedLanguage: string = 'es';

  constructor() {}

  toggleDarkMode(event: any) {
    const isDark = event.detail.checked;

    if (isDark) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }
}
