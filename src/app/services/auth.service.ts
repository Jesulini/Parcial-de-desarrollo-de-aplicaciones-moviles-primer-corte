import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(email: string, password: string) {
    if (email === 'test@correo.com' && password === '123456') {
      return of({ success: true, token: 'fake-jwt-token' });
    } else {
      return throwError(() => new Error('Credenciales inválidas'));
    }
  }
}
