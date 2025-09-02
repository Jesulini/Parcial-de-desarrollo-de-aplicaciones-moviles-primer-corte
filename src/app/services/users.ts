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

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser') || 'null');
  }

  getUsers() {
    return JSON.parse(localStorage.getItem('users') || '[]');
  }

  saveUsers(users: any[]) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  clearCurrentUser() {
    localStorage.removeItem('currentUser');
  }

  deleteCurrentUser(): boolean {
    const current = this.getCurrentUser();
    if (!current) return false;

    const users = this.getUsers().filter((u: any) => u.email !== current.email);
    this.saveUsers(users);
    this.clearCurrentUser();
    return true;
  }

  updateUser(updatedUser: any) {
    let users = this.getUsers();
    users = users.map((u: any) =>
      u.email === updatedUser.email ? updatedUser : u
    );
    this.saveUsers(users);
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
  }
}
