import { Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { HomePage } from './home/home.page';
import { RegisterPage } from './register/register.page';  // Importa el componente standalone

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'home', component: HomePage },
  { path: 'register', component: RegisterPage },  // Ruta para el componente standalone
];
