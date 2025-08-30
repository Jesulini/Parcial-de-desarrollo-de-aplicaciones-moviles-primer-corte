import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../services/users';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {

  user = {
    id: crypto.randomUUID(),
    name: '',
    lastName: '',
    email: '',
    password: '',
    country: {
      id: '',
      value: ''
    }
  };

  countries: any[] = [];
  errorMessage: string = '';

  constructor(private http: HttpClient, private usersService: UsersService) {}

  ngOnInit() {
    this.loadCountries();
  }

  loadCountries() {
    this.http.get<any>('https://countriesnow.space/api/v0.1/countries/flag/unicode')
      .subscribe({
        next: (res) => {
          if (res?.data) {
            this.countries = res.data.map((c: any) => ({
              id: c.name,
              flag: c.unicodeFlag,
              name: c.name,
              value: `${c.unicodeFlag} ${c.name}`
            }));
          }
        },
        error: (err) => console.error('Error al cargar países:', err)
      });
  }

  onRegister() {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    // Validar campos obligatorios
    if (!this.user.name || !this.user.lastName || !this.user.email || !this.user.password || !this.user.country.id) {
      this.errorMessage = 'Todos los campos son obligatorios';
      return;
    }

    // Validar email
    if (!emailRegex.test(this.user.email)) {
      this.errorMessage = 'Correo no válido';
      return;
    }

    this.errorMessage = '';
    this.usersService.saveUser(this.user);
    alert('Usuario registrado correctamente!');
    console.log('Usuario registrado:', this.user);

    // Reset opcional del formulario
    this.user = {
      id: crypto.randomUUID(),
      name: '',
      lastName: '',
      email: '',
      password: '',
      country: { id: '', value: '' }
    };
  }
}
