import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users';
import { Router } from '@angular/router';
import { CountriesService } from '../services/countries';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {
  user: any = {};
  showPassword: boolean = false;
  successMessage: string = "";
  countries: any[] = []; // 🌍 aquí guardamos países + banderas

  constructor(
    private usersService: UsersService,
    private router: Router,
    private countriesService: CountriesService
  ) {}

  ngOnInit() {
    // Cargar usuario
    this.user = this.usersService.getCurrentUser();

    // Consumir la API de países
    this.countriesService.getCountries().subscribe((response) => {
      if (response && response.data) {
        this.countries = response.data.sort((a: any, b: any) =>
          a.name.localeCompare(b.name)
        );
      }
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  saveProfile() {
    this.usersService.updateUser(this.user);
    this.successMessage = "✅ Perfil actualizado correctamente";

    setTimeout(() => {
      this.successMessage = "";
    }, 3000);
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
