import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  countries: any[] = []; // aquí guardamos la lista de países con banderas

  constructor(private http: HttpClient) {}

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
              value: `${c.unicodeFlag} ${c.name}`
            }));
          }
        },
        error: (err) => {
          console.error('Error al cargar países:', err);
        }
      });
  }

  onRegister() {
    console.log('Usuario registrado:', this.user);
    alert(JSON.stringify(this.user, null, 2));
  }
}
