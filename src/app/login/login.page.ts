import { Component } from '@angular/core';
import { UsersService } from '../services/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {

  user = {
    email: '',
    password: ''
  };

  errorMessage: string = '';

  constructor(private usersService: UsersService, private router: Router) {}

  onLogin() {
    if (!this.user.email || !this.user.password) {
      this.errorMessage = 'Todos los campos son obligatorios';
      return;
    }

    const user = this.usersService.getUserByEmail(this.user.email);
    if (!user) {
      this.errorMessage = 'Usuario no encontrado';
      return;
    }

    if (user.password !== this.user.password) {
      this.errorMessage = 'Contraseña incorrecta';
      return;
    }

    this.errorMessage = '';

    // 👉 Guardar usuario actual en LocalStorage
    localStorage.setItem('currentUser', JSON.stringify(user));

    // Redirigir al HomePage
    this.router.navigate(['/home']);
  }
}
