import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users';
import { Router } from '@angular/router';

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

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit() {
    this.user = this.usersService.getCurrentUser();
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  saveProfile() {
    this.usersService.updateUser(this.user);
    this.successMessage = "✅ Perfil actualizado correctamente";

    // Ocultar mensaje después de 3 segundos
    setTimeout(() => {
      this.successMessage = "";
    }, 3000);
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
