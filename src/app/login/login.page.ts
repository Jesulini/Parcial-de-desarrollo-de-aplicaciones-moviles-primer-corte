import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false

})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor() {}

  onLogin() {
    console.log('Iniciando sesión con:', this.email, this.password);
    // Aquí puedes meter lógica para autenticar
  }
}
