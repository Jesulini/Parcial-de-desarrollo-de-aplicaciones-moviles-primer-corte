// src/app/components/sidebar/sidebar.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }

  logout() {
  localStorage.removeItem('loggedUser'); // si estás guardando el usuario logueado
  this.router.navigate(['/login']);
}

}
