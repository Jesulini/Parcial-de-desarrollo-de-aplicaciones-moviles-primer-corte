import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: false,
})
export class SettingsPage {
  notifications = true;
  vibration = true;
  darkTheme = false;
  keepSession = false;

  constructor(
    private router: Router,
    private usersService: UsersService,
    private alertController: AlertController
  ) {}

  toggleDarkTheme() {
    this.darkTheme = !this.darkTheme;
    document.body.classList.toggle('dark', this.darkTheme);
  }

  toggleNotifications() {
    this.notifications = !this.notifications;
  }

  toggleVibration() {
    this.vibration = !this.vibration;
  }

  toggleKeepSession() {
    this.keepSession = !this.keepSession;
  }

  logout() {
    this.usersService.clearCurrentUser();
    this.router.navigate(['/login']);
  }

  async deleteAccount() {
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: '¿Seguro que quieres borrar tu cuenta? Esta acción no se puede deshacer.',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar',
          handler: () => {
            this.usersService.deleteCurrentUser();
            this.router.navigate(['/login']);
          },
        },
      ],
    });

    await alert.present();
  }

  //Método para volver al home
  goHome() {
    this.router.navigate(['/home']);
  }
}
