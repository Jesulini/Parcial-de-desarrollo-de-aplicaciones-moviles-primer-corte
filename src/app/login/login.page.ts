import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {

  // Modelo del formulario
  user = {
    email: '',
    password: ''
  };

  constructor() {}

  onLogin() {
    // Creamos el objeto JSON igual al que pasaste
    const loginData = {
      email: this.user.email,
      password: this.user.password
    };

    console.log('Login data:', loginData);
    alert(JSON.stringify(loginData, null, 2));
  }
}
