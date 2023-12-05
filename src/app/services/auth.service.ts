import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserLogin } from '../dto/user-login';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http: HttpClient = inject(HttpClient);
  jwtService: JwtService = inject(JwtService);

  urlApi = 'http://localhost:8080/api/v1/auth';

  constructor() { }

  login(userLogin: UserLogin): Observable<any> {
    const api = `${this.urlApi}/login`;
    return this.http.post<any>(api, userLogin);
  }

  getRole(): Observable<any> {
    if (this.jwtService.isLogged()) {
      const api = `${this.urlApi}/${this.jwtService.getEmail()}/role`;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.jwtService.getToken()}`
        })
      };
      return this.http.get(api, httpOptions);
    }
    return of(undefined);
  }

}
