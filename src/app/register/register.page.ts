import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';  // Importa IonicModule
import { FormsModule } from '@angular/forms';  // Si estás usando ngModel
import { CommonModule } from '@angular/common';  // Importa CommonModule para usar *ngIf
import { ApiService } from '../services/api';

interface Country {
  id: string;
  value: string;  // Asegúrate de que 'value' esté aquí
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,  // Indica que este es un componente standalone
  imports: [IonicModule, FormsModule, CommonModule]  // Asegúrate de incluir CommonModule aquí
})
export class RegisterPage {
  user = {
    id: '2d54aa97-9868-4660-83d0-8d55504e0f3c',
    name: 'Jane',
    lastName: 'Doe',
    email: 'jane@doe.com',
    password: 'c775e7b757ede630cd0aa1113bd102661ab38829ca52a6422ab782862f268646',
    country: { id: 'Colombia', value: '🇨🇴 Colombia' },
  };

  countries: Country[] = [];
  error: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadCountries();
  }

  loadCountries() {
    this.apiService.getCountriesFlags().subscribe(
      (response) => {
        this.countries = response.data.map((country: any) => ({
          id: country.name,
          value: `${country.flag} ${country.name}`  // Asignar 'value' correctamente
        }));
      },
      (error) => {
        this.error = 'Error al cargar los países.';
      }
    );
  }

  onRegister() {
    console.log('Registro completado:', this.user);
    // Aquí puedes agregar la lógica para enviar los datos al servidor
  }
}
