import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: false,
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: any = { name: '', lastName: '', email: '', country: '' };
  countries: any[] = [];

  constructor(private alertController: AlertController, private http: HttpClient) {}

  ngOnInit() {
    this.loadUser();
    this.loadCountries();
  }

  loadUser() {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.length > 0) {
      this.user = users[users.length - 1]; // último usuario registrado/logeado
    }
  }

  loadCountries() {
    this.http.get<any>('https://countriesnow.space/api/v0.1/countries/flag/unicode')
      .subscribe(res => {
        if (res.data) {
          this.countries = res.data;
        }
      });
  }

  async updateProfile() {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.length > 0) {
      users[users.length - 1] = this.user;
      localStorage.setItem('users', JSON.stringify(users));
    }

    const alert = await this.alertController.create({
      header: 'Perfil Actualizado',
      message: 'Los cambios se guardaron correctamente',
      buttons: ['OK']
    });
    await alert.present();
  }

}
