import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage {

  // Modelo del formulario
  user = {
    id: crypto.randomUUID(), // genera UUID
    name: '',
    lastName: '',
    email: '',
    password: '',
    country: {
      id: '',
      value: ''
    }
  };

  // Lista de países (ejemplo simple, podrías llenarlo con la API que vimos)
  countries = [
    { id: 'Colombia', value: '🇨🇴 Colombia' },
    { id: 'Mexico', value: '🇲🇽 México' },
    { id: 'USA', value: '🇺🇸 Estados Unidos' },
    { id: 'Argentina', value: '🇦🇷 Argentina' }
  ];

  constructor() {}

  onRegister() {
    console.log('Usuario registrado:', this.user);
    alert(JSON.stringify(this.user, null, 2));
  }
}
