import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    country: ''
  };

  countries: any[] = [];
  errorMessage: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loadCountries();
  }

  loadCountries() {
    this.http.get<any>('https://countriesnow.space/api/v0.1/countries/flag/unicode')
      .subscribe(res => {
        if (res.data) {
          this.countries = res.data;
        }
      }, err => {
        console.error('Error cargando países', err);
      });
  }

  async onRegister() {
    // Validación de campos
    if (!this.user.name || !this.user.lastName || !this.user.email || !this.user.password || !this.user.country) {
      this.errorMessage = 'Por favor completa todos los campos';
      return;
    }

    this.errorMessage = '';

    // Leer usuarios existentes de LocalStorage
    let users = JSON.parse(localStorage.getItem('users') || '[]');

    // Validar que el correo no exista
    const emailExists = users.some((u: any) => u.email === this.user.email);
    if (emailExists) {
      this.errorMessage = 'El correo ya está registrado';
      return;
    }

    // Agregar el nuevo usuario y guardar
    users.push(this.user);
    localStorage.setItem('users', JSON.stringify(users));

    // Mostrar alerta de registro exitoso
    const alert = await this.alertController.create({
      header: 'Usuario Registrado',
      message: 'Tu cuenta se ha creado correctamente',
      buttons: ['OK']
    });

    await alert.present();

    alert.onDidDismiss().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
