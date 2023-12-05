import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCreate } from '../dto/user-create';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: HttpClient = inject(HttpClient);
  jwtService: JwtService = inject(JwtService);

  private apiUrl = 'http://localhost:8080/api/v1/users';

  constructor() { }

  createUser(userCreate: UserCreate): Observable<any> {
    const api = `${this.apiUrl}/create-user`;
    return this.http.post<any>(api, userCreate);
  }

  getUserByEmail(email: string): Observable<any> {
    const api = `${this.apiUrl}/${email}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.jwtService.getToken()}`
      })
    };
    return this.http.get(api, httpOptions);
  }
}
