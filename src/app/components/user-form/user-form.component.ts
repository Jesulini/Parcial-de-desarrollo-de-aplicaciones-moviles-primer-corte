import { Component, EventEmitter, Output } from '@angular/core';
import axios from 'axios';

@Component({
  standalone: false,
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  userData = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    country: ''
  };

  countries: any[] = [];

  @Output() submitUser: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.loadCountries();
  }

  async loadCountries() {
    try {
      const response = await axios.get('https://countriesnow.space/api/v0.1/countries/flag/unicode');
      this.countries = response.data.data.map((country: any) => ({
        name: country.country,
        flag: country.flag
      }));
    } catch (error) {
      console.error('Error al cargar los países:', error);
    }
  }

  onSubmit() {
    this.submitUser.emit(this.userData);
    this.userData = { name: '', lastName: '', email: '', password: '', country: '' };
  }
}
