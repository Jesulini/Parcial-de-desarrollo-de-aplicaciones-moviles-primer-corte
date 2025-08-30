import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() {}

  saveUser(user: any) {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  getUserByEmail(email: string) {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    return users.find((u: any) => u.email === email);
  }
}
