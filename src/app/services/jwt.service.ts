import { Injectable } from '@angular/core';
import { jwtDecode, JwtPayload } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  setToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  setRefreshToken(refreshToken: string): void {
    localStorage.setItem('refresh_token', refreshToken);
  }

  getToken(): any {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('access_token');
    }
    return undefined;
  }

  getRefreshToken(): any {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('refresh_token');
    }
    return undefined;
  }

  logout(): void {
    if (this.isLogged()) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
    }
  }

  isLogged(): boolean {
    return !!this.getToken();
  }

  getEmail(): string | undefined {
    const token = this.getToken();
    if (!token) return undefined;

    try {
      const decodedToken = jwtDecode(token);
      return decodedToken.sub;
    } catch (error) {
      console.log('Error decoding token: ', error);
      return undefined;
    }
  }

}
